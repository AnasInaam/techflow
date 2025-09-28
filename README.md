# TechFlow - Complete Login Project

A modern, full-featured web application built with Next.js, featuring user authentication, a beautiful dashboard, and comprehensive business pages.

## 🚀 Features

### Authentication System
- ✅ User Registration with validation
- ✅ Secure Login with bcrypt password hashing  
- ✅ Professional authentication forms with loading states
- ✅ Form validation and error handling

### Complete Website
- 🏠 **Home Page** - Beautiful landing page with hero section and features preview
- ⚡ **Features Page** - Detailed feature showcase with interactive cards
- 💰 **Pricing Page** - Comprehensive pricing plans with annual/monthly toggle
- 📞 **Contact Page** - Professional contact form with company information
- 📊 **Dashboard** - Full-featured user dashboard with multiple sections

### Dashboard Features
- Overview with statistics and recent activity
- Projects management with progress tracking
- Analytics and performance metrics  
- Team management interface
- Account settings and profile management

### Technical Features
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🌟 Smooth animations and transitions
- 🔒 Secure MongoDB integration
- ⚡ Fast performance with Next.js 14
- 🎯 TypeScript for type safety

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Authentication**: bcrypt for password hashing
- **Icons**: Unicode emojis and SVG icons

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- MongoDB running locally or MongoDB Atlas account

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root directory:

```bash
# For local MongoDB (default)
MONGODB_URI=mongodb://localhost:27017/login-project

# Or for MongoDB Atlas (replace with your credentials)
# MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority
```

### 3. Start MongoDB (if using local)
```bash
# Start MongoDB service
mongod --dbpath "C:\data\db"
```

### 4. Seed Sample User (Optional)
```bash
node seed.js
```
This creates a demo user:
- **Email**: demo@techflow.com  
- **Password**: password123

### 5. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Pages & Navigation

### Public Pages
- `/` - Home page with company overview
- `/features` - Detailed feature information  
- `/pricing` - Pricing plans and billing options
- `/contact` - Contact form and company details
- `/login` - User login form
- `/register` - User registration form

### Protected Pages  
- `/dashboard` - Main user dashboard (requires login)

## 🎯 Usage

### Testing the Application

1. **Browse the website** - Visit all public pages to see the complete business website
2. **Register a new account** - Use the registration form with valid information
3. **Login with demo account** - Use demo@techflow.com / password123  
4. **Explore the dashboard** - Check different tabs and features
5. **Test responsiveness** - View on different screen sizes

### User Authentication Flow

1. User visits the website and clicks "Get Started"
2. User fills out registration form with validation
3. Account is created with hashed password in MongoDB
4. User logs in with credentials  
5. Successful login redirects to dashboard
6. Dashboard provides full app functionality

## 🏗️ Project Structure

```
app/
├── page.tsx                 # Home page
├── login/page.tsx          # Login form
├── register/page.tsx       # Registration form  
├── features/page.tsx       # Features showcase
├── pricing/page.tsx        # Pricing plans
├── contact/page.tsx        # Contact form
├── dashboard/page.tsx      # User dashboard
├── api/
│   └── auth/
│       ├── login/route.ts  # Login API endpoint
│       └── register/route.ts # Registration API endpoint
├── utils/
│   └── mongodb.ts          # Database connection
├── globals.css             # Global styles
└── layout.tsx              # App layout

```

## 🔧 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `globals.css` for custom animations
- Edit component styles directly in TSX files

### Database
- Update MongoDB connection in `app/utils/mongodb.ts`
- Modify user schema in registration API
- Add new collections as needed

### Features  
- Add new pages in the `app/` directory
- Create new API endpoints in `app/api/`
- Extend dashboard functionality

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### Other Platforms
- Compatible with any Node.js hosting
- Requires MongoDB database access
- Set environment variables accordingly

## 📋 Features Checklist

- ✅ Home page with modern design
- ✅ Features page with detailed information  
- ✅ Pricing page with plan comparison
- ✅ Contact page with form functionality
- ✅ User registration with validation
- ✅ Secure user login
- ✅ Protected dashboard with multiple sections
- ✅ MongoDB integration
- ✅ Responsive design
- ✅ Loading states and error handling
- ✅ Professional UI/UX
- ✅ Type safety with TypeScript

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License.
