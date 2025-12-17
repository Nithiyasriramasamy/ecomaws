const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const connectDB = require('./config/database');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors({
  origin: config.CORS_ORIGIN
}));
app.use(express.json());

// Routes
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'MERN E-commerce API is running!' });
});

app.listen(config.PORT, () => {
  console.log(`🚀 Server running on port ${config.PORT}`);
  console.log(`🌍 Environment: ${config.NODE_ENV}`);
});