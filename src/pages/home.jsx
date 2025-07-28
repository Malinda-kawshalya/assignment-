import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import '../styles/home.css';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';


function Home() {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { token, user } = useAuth();

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        setLoading(true);
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        
        const res = await axios.get(`${API_BASE_URL}/issues`, config);
        
        // Handle the new API response format
        if (res.data.success && res.data.data) {
          setIssues(res.data.data);
          setFilteredIssues(res.data.data);
        } else {
          setIssues([]);
          setFilteredIssues([]);
        }
      } catch (err) {
        console.error('Error fetching issues:', err);
        setError('Failed to load issues');
        setIssues([]);
        setFilteredIssues([]);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchIssues();
    }
  }, [token]);

  // Search functionality
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredIssues(issues);
    } else {
      const filtered = issues.filter(issue =>
        issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.priority.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (issue.assignee && issue.assignee.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (issue.category && issue.category.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredIssues(filtered);
    }
  }, [searchTerm, issues]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading issues...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Light ray effects */}
      <div className="light-ray light-ray-1" style={{'--rotation': '25deg'}}></div>
      <div className="light-ray light-ray-2" style={{'--rotation': '-15deg'}}></div>
      <div className="light-ray light-ray-3" style={{'--rotation': '45deg'}}></div>
      
      <div className="container">
        <div className="home-header">
          <div>
            <h2 className="home-title">All Issues</h2>
            <p className="home-subtitle">Manage and track your project issues</p>
          </div>
          <Link to="/create" className="create-button">
            <span className="create-button-icon">+</span>
            Create New
          </Link>
        </div>
        
        {/* Search Bar */}
        <div className="search-container">
          <div className="search-box">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              placeholder="Search issues by title, description, status, priority, assignee, or category..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="clear-search"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="search-results-info">
              Found {filteredIssues.length} issue{filteredIssues.length !== 1 ? 's' : ''} matching "{searchTerm}"
            </div>
          )}
        </div>
        
        {filteredIssues.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📋</div>
            <h3 className="empty-state-title">
              {searchTerm ? 'No matching issues found' : 'No issues found'}
            </h3>
            <p className="empty-state-subtitle">
              {searchTerm ? 'Try adjusting your search terms' : 'Create your first issue to get started'}
            </p>
          </div>
        ) : (
          <div className="issues-grid">
            {filteredIssues.map(issue => (
              <div key={issue._id} className="issue-card">
                <div className="issue-card-content">
                  <div className="issue-card-header">
                    <Link 
                      to={`/issue/${issue._id}`}
                      className="issue-title"
                    >
                      {issue.title}
                    </Link>
                    <span className={`status-badge status-${issue.status.toLowerCase().replace(' ', '-')}`}>
                      {issue.status}
                    </span>
                  </div>
                  
                  <div className="issue-author">
                    <span className="author-label">Created by:</span>
                    <span className="author-name">{issue.author?.name || 'Unknown User'}</span>
                  </div>
                  
                  {issue.description && (
                    <p className="issue-description">{issue.description}</p>
                  )}
                  
                  <div className="issue-meta">
                    <span className="issue-priority priority-${issue.priority.toLowerCase()}">
                      {issue.priority} Priority
                    </span>
                    <span className="issue-date">
                      {new Date(issue.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="issue-actions">
                    <div className="comment-info">
                      <span className="comment-count">
                        💬 {issue.commentCount || 0} comments
                      </span>
                    </div>
                    <div className="action-buttons">
                      <Link 
                        to={`/issue/${issue._id}#comments`}
                        className="comment-button"
                        title="Add comment"
                      >
                        <span className="comment-icon">💬</span>
                        Comment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;