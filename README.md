# 🚀 Lead Management CRM System

A comprehensive full-stack lead management application built with modern web technologies. This CRM system provides a professional interface for capturing, managing, and tracking leads with advanced filtering, search capabilities, and detailed analytics.

![Lead Management CRM](https://img.shields.io/badge/CRM-Lead%20Management-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue)

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## ✨ Features

### 🎨 Professional CRM Interface
- **Dark Sidebar Navigation** with intuitive menu structure
- **Dashboard Analytics** with real-time lead statistics
- **Modal-based Lead Creation** for seamless user experience
- **Responsive Design** optimized for all screen sizes

### 📊 Advanced Lead Management
- **Comprehensive Lead Form** with 15+ fields including:
  - Basic Info: Name, Email, Phone, Company
  - Lead Classification: Status, Qualification, Interest Field
  - Source Tracking: Website, Social Media, Cold Call, Email Campaign
  - Assignment: Team member allocation
  - Additional Details: City, Passout Year, Notes
- **Smart Search & Filtering** by name, email, phone, and status
- **Professional Table View** with sortable columns and status badges
- **Real-time Updates** with optimistic UI for instant feedback

### 🔧 Settings & Configuration
- **Multi-tab Settings Panel** with:
  - General Settings (Company info, timezone, preferences)
  - Notification Management (Email, SMS, Push notifications)
  - Lead Management Rules (Auto-assignment, retention policies)
  - Security Settings (Password policy, 2FA, session management)

### 🛡️ Backend Features
- **RESTful API** with Express.js and MongoDB
- **Data Validation** with Mongoose schemas
- **Error Handling** with proper HTTP status codes
- **CORS Configuration** for secure cross-origin requests
- **Request Logging** for debugging and monitoring

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for modern, responsive styling
- **Vite** for fast development and building
- **React Hook Form** + **Yup** for form validation
- **Axios** for HTTP client communication

### Backend
- **Node.js** with Express.js framework
- **MongoDB Atlas** for cloud database
- **Mongoose** for object modeling
- **Morgan** for request logging
- **CORS** for cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository
```bash
git clone https://github.com/anuragmishrash/LeadManagementModule.git
cd LeadManagementModule
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 3. Environment Setup
```bash
# Copy environment template
cp .env.example .env
cp server/.env.example server/.env

# Edit server/.env with your MongoDB connection string
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/leadManagementDB
```

### 4. Start the Application

**Option 1 - Run Both Servers (Recommended):**
```bash
npm run dev:full
```

**Option 2 - Run Separately:**
```bash
# Terminal 1 - Backend (Port 5000)
npm run dev:backend

# Terminal 2 - Frontend (Port 3000)
npm run dev:frontend
```

### 5. Access the Application
- **Frontend CRM**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📁 Project Structure

```
LeadManagementModule/
├── 📁 src/                          # Frontend source code
│   ├── 📁 components/               # React components
│   │   ├── 📄 LeadForm.tsx         # Advanced lead capture form
│   │   ├── 📄 EnhancedLeadsList.tsx # Professional leads table
│   │   ├── 📄 Sidebar.tsx          # Navigation sidebar
│   │   ├── 📄 Settings.tsx         # Settings management
│   │   ├── 📄 AddLeadModal.tsx     # Modal for lead creation
│   │   └── 📄 SuccessMessage.tsx   # Success notifications
│   ├── 📁 pages/                   # Page components
│   │   └── 📄 App.tsx              # Main application
│   ├── 📁 services/                # API services
│   │   └── 📄 api.ts               # HTTP client configuration
│   ├── 📁 types/                   # TypeScript definitions
│   │   └── 📄 Lead.ts              # Lead interface types
│   └── 📄 main.tsx                 # Application entry point
├── 📁 server/                      # Backend source code
│   ├── 📁 models/                  # Database models
│   │   └── 📄 Lead.js              # Lead schema definition
│   ├── 📁 routes/                  # API routes
│   │   └── 📄 leads.js             # Lead CRUD operations
│   ├── 📄 server.js                # Express server setup
│   └── 📄 package.json             # Backend dependencies
├── 📄 package.json                 # Frontend dependencies
├── 📄 README.md                    # Project documentation
├── 📄 .gitignore                   # Git ignore rules
└── 📄 vite.config.ts               # Vite configuration
```

## 🔌 API Documentation

### Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/leads` | Fetch all leads | - |
| POST | `/leads` | Create new lead | Lead object |
| DELETE | `/leads/:id` | Delete lead by ID | - |
| GET | `/health` | Health check | - |

### Lead Object Schema
```typescript
{
  name: string;           // Required
  email: string;          // Required, validated
  phone?: string;         // Optional, 7-15 digits
  company?: string;       // Optional
  source: string;         // Enum: Website, Ad, Referral, etc.
  status: string;         // Enum: New, Qualified, Converted, etc.
  qualification: string;  // Enum: High School, Bachelors, etc.
  interest: string;       // Enum: Web Development, etc.
  assignedTo: string;     // Team member name
  city?: string;          // Optional
  passoutYear?: number;   // Optional
  heardFrom?: string;     // Optional
  notes?: string;         // Optional
  optIn: boolean;         // Marketing consent
}
```

## 🎯 Key Features Implemented

### ✅ Form Validation
- Real-time validation with error messages
- Email format validation
- Phone number validation (7-15 digits)
- Required field enforcement
- Form submission prevention until valid

### ✅ User Experience
- Optimistic UI updates for instant feedback
- Loading states for all async operations
- Success/error notifications with auto-dismiss
- Responsive design for mobile and desktop
- Accessible forms with proper ARIA labels

### ✅ Data Management
- Advanced search functionality
- Status-based filtering
- Professional table with sortable columns
- Color-coded status badges
- Real-time lead statistics on dashboard

### ✅ Settings & Configuration
- Company and admin profile management
- Notification preferences (Email, SMS, Push)
- Lead management rules and policies
- Security settings and access control

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Message Guidelines
- `feat:` New feature implementation
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code formatting changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anurag Mishra**
- GitHub: [@anuragmishrash](https://github.com/anuragmishrash)
- Email: anurag@leadcrm.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB team for the excellent database solution
- All contributors and testers

---

⭐ **Star this repository if you found it helpful!**