const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct } = require('../controllers/productController');

// GET /api/products - Get all products
router.get('/', getAllProducts);

// POST /api/products - Add new product
router.post('/', addProduct);

module.exports = router;