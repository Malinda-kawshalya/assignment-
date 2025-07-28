# Issue Tracker - Full Stack Application

A modern, full-featured issue tracking system built with React.js frontend and Node.js backend. This application allows teams to efficiently manage, track, and resolve project issues with a clean, intuitive interface.

## 🚀 Features & Functionalities

### 🔐 Authentication & User Management
- **User Registration & Login** - Secure user authentication with JWT tokens
- **Profile Management** - Users can update their profile information and upload profile pictures
- **Role-based Access** - Admin and user roles with different permissions
- **Password Security** - Encrypted passwords using bcrypt

### 📋 Issue Management
- **Create Issues** - Users can create new issues with detailed information
- **View All Issues** - Dashboard showing all issues in a responsive grid layout
- **Issue Details** - Detailed view of individual issues with complete information
- **Edit Issues** - Update existing issues (title, description, priority, status, assignee)
- **Delete Issues** - Remove issues from the system
- **Issue Categories** - Organize issues by type (Bug, Feature, Enhancement, Documentation)
- **Priority Levels** - Set issue priority (Low, Medium, High, Urgent)
- **Status Tracking** - Track issue progress (Open, In Progress, Resolved, Closed)

### 💬 Comments System
- **Add Comments** - Users can comment on issues for discussion and updates
- **View Comments** - Display all comments with author information and timestamps
- **Comment Count** - Shows number of comments on each issue

### 🔍 Search & Filter
- **Real-time Search** - Search issues by title, description, status, priority, assignee, or category
- **Live Results** - Instant filtering as you type
- **Search Results Counter** - Shows number of matching issues
- **Clear Search** - Easy one-click search reset

### 👤 User Experience
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, bright interface with smooth animations and transitions
- **Loading States** - Visual feedback during data loading
- **Error Handling** - Graceful error messages and retry options
- **Empty States** - Helpful messages when no data is available

### 📊 Dashboard Features
- **Issue Statistics** - Overview of user's issues and activity
- **My Issues** - Personal dashboard showing user's created issues
- **Recent Activity** - Track recent issue updates and comments

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing for single-page application
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with custom properties and animations

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing library
- **Multer** - File upload middleware for profile pictures
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting and formatting
- **Nodemon** - Auto-restart during development
- **dotenv** - Environment variable management

## 📁 Project Structure

```
assignment/
├── src/                    # Frontend source code
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── context/           # React context for state management
│   ├── styles/            # CSS stylesheets
│   └── config/            # API configuration
├── backend/               # Backend source code
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── controllers/       # Route controllers
│   └── config/            # Database configuration
└── public/                # Static assets
```

## 🚀 Getting Started

### Prerequisites
Before setting up the project, make sure you have the following installed:
- **Node.js** (v14 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **MongoDB** database - Either local installation or MongoDB Atlas cloud database
- **npm** or **yarn** package manager (npm comes with Node.js)
- **Git** - For cloning the repository

### Step-by-Step Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/Malinda-kawshalya/assignment-.git
cd assignment-
```

#### 2. Backend Setup

##### Navigate to the backend directory:
```bash
cd backend
```

##### Install backend dependencies:
```bash
npm install
```

##### Create environment variables file:
Create a `.env` file in the `backend` directory with the following content:
```env
# Database Configuration
MONGO_URL=mongodb+srv://your-username:your-password@cluster.mongodb.net/issuetracker?retryWrites=true&w=majority

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret (use a strong, random string)
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-complex

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

**Important Notes:**
- Replace `your-username` and `your-password` with your MongoDB credentials
- For MongoDB Atlas: Get connection string from your Atlas dashboard
- For local MongoDB: Use `mongodb://localhost:27017/issuetracker`
- Generate a strong JWT_SECRET (at least 32 characters)

##### Start the backend server:
```bash
npm start
```

The backend server will start on `http://localhost:5000`

#### 3. Frontend Setup

##### Open a new terminal and navigate to the project root:
```bash
cd .. # Go back to project root
```

##### Install frontend dependencies:
```bash
npm install
```

##### Create frontend environment variables file:
Create a `.env` file in the project root directory:
```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_BACKEND_URL=http://localhost:5000
```

##### Start the frontend development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

#### 4. Database Setup & Sample Data

##### Option A: Load Sample Data (Recommended for testing)
```bash
cd backend
node seeder.js -i
```

This creates:
- **3 sample users:**
  - Admin: `admin@issuetracker.com` / `admin123`
  - John: `john@example.com` / `password123`
  - Jane: `jane@example.com` / `password123`
- **8 sample issues** with different statuses, priorities, and categories

##### Option B: Start with Empty Database
If you prefer to start fresh, just ensure your MongoDB connection is working and skip the seeder.

#### 5. Access the Application

1. **Open your browser** and go to `http://localhost:5173`
2. **Register a new account** or **login with sample data:**
   - Email: `admin@issuetracker.com`
   - Password: `admin123`
3. **Start creating and managing issues!**

### 🛠️ Development Commands

#### Backend Commands (from `/backend` directory):
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
node seeder.js -i  # Import sample data
node seeder.js -d  # Delete all data
```

#### Frontend Commands (from project root):
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### 🔧 Environment Configuration

#### Backend Environment Variables (`.env` in `/backend`):
```env
MONGO_URL=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173
```

#### Frontend Environment Variables (`.env` in project root):
```env
VITE_API_URL=http://localhost:5000/api
VITE_BACKEND_URL=http://localhost:5000
```

### 📊 MongoDB Setup Options

#### Option 1: MongoDB Atlas (Cloud - Recommended)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user
4. Get connection string from "Connect" button
5. Replace in your `.env` file

#### Option 2: Local MongoDB Installation
1. Download and install MongoDB Community Server
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/issuetracker`

### 🚨 Troubleshooting

#### Common Issues:

**1. Port Already in Use:**
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 5173 (frontend)
npx kill-port 5173
```

**2. MongoDB Connection Issues:**
- Check your internet connection (for Atlas)
- Verify MongoDB service is running (for local)
- Check username/password in connection string
- Ensure your IP is whitelisted (for Atlas)

**3. CORS Errors:**
- Ensure backend is running on port 5000
- Check FRONTEND_URL in backend `.env` file
- Restart both servers after changing environment variables

**4. Missing Dependencies:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**5. Environment Variables Not Loading:**
- Ensure `.env` files are in correct directories
- Restart servers after changing `.env` files
- Check for typos in variable names

### 📝 Quick Start Checklist

- [ ] Node.js installed
- [ ] MongoDB setup (Atlas or local)
- [ ] Repository cloned
- [ ] Backend dependencies installed
- [ ] Backend `.env` file created
- [ ] Frontend dependencies installed
- [ ] Frontend `.env` file created
- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 5173
- [ ] Sample data loaded (optional)
- [ ] Application accessible at `http://localhost:5173`

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/upload-profile-picture` - Upload profile picture

### Issues
- `GET /api/issues` - Get all issues
- `POST /api/issues` - Create new issue
- `GET /api/issues/:id` - Get issue by ID
- `PUT /api/issues/:id` - Update issue
- `DELETE /api/issues/:id` - Delete issue
- `GET /api/issues/:id/comments` - Get issue comments
- `POST /api/issues/:id/comments` - Add comment to issue

## 🎨 UI Features
- Modern gradient backgrounds and effects
- Smooth hover animations and transitions
- Responsive grid layouts
- Interactive buttons and form elements
- Visual feedback for user actions
- Clean typography and spacing

## 📱 Responsive Design
The application is fully responsive and works seamlessly across:
- Desktop computers (1920px+)
- Laptops (1024px - 1919px)
- Tablets (768px - 1023px)
- Mobile phones (320px - 767px)

## 🔒 Security Features
- JWT-based authentication
- Password encryption
- Protected routes
- CORS configuration
- Input validation and sanitization
- File upload security (image files only)

## 👥 User Roles
- **Admin** - Full access to all features and user management
- **User** - Can create, view, and manage their own issues

## 🚀 Deployment
- **Frontend** - Deployed on Vercel for fast global delivery
- **Backend** - Deployed on Railway for reliable backend services
- **Database** - MongoDB Atlas for cloud database hosting

This Issue Tracker provides a complete solution for project management and issue tracking with a focus on user experience, performance, and maintainability.
