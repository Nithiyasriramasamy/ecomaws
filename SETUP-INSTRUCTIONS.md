# 🚀 MERN E-commerce Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git (optional)

## Quick Setup (Windows)

### 1. Install Dependencies
```bash
# Run the setup script
setup.bat
```

### 2. Configure MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Update `backend/.env` file:
```
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/ecommerce
PORT=5000
```

### 3. Start the Application
```bash
# Terminal 1 - Start Backend
start-backend.bat

# Terminal 2 - Start Frontend  
start-frontend.bat
```

## Manual Setup

### Backend Setup
```bash
cd backend
npm install
# Update .env file with MongoDB connection
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 🌐 Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📱 Features to Test
1. **Home Page** - View all products
2. **Add Product** - Add new products with image URLs
3. **Cart** - Add products to cart and manage items
4. **Checkout** - Complete purchase with shipping info

## 🔧 Sample Data
Use these image URLs when adding products:
- Laptop: https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500
- Phone: https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500
- Headphones: https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500

## 🐛 Troubleshooting
- Make sure MongoDB Atlas connection string is correct
- Check that both servers are running on different ports
- Ensure Node.js is installed and updated
- Check browser console for any errors

## 📁 Project Structure
```
ecommerce/
├── backend/           # Express.js API server
├── frontend/          # React.js application  
├── setup.bat         # Windows setup script
├── start-backend.bat # Start backend server
└── start-frontend.bat # Start frontend server
```