# MERN E-commerce Website

A simple e-commerce website built with MongoDB Atlas, Express.js, React.js, and Node.js.

## 🔧 Tech Stack
- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas
- **API Communication**: Axios
- **Environment Variables**: dotenv

## 📁 Project Structure
```
ecommerce/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
```

## 🚀 Setup Instructions

### 1. Clone and Setup
```bash
# Navigate to project directory
cd ecommerce

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. MongoDB Atlas Setup
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string
4. Update `.env` file in backend folder

### 3. Environment Variables
Create `.env` file in backend folder:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
PORT=5000
```

### 4. Run the Application
```bash
# Start backend (from backend folder)
npm start

# Start frontend (from frontend folder - new terminal)
npm start
```

## 📄 Features
- ✅ Home Page - Display all products
- ✅ Cart Page - Manage cart items
- ✅ Buy Page - Simple checkout
- ✅ Add Product Page - Add new products
- ✅ Responsive design with Tailwind CSS
- ✅ REST APIs for products and cart
- ✅ MongoDB Atlas integration

## 🎯 API Endpoints
- `GET /api/products` - Get all products
- `POST /api/products` - Add new product
- `POST /api/cart` - Add to cart
- `GET /api/cart` - Get cart items
- `DELETE /api/cart/:id` - Remove from cart