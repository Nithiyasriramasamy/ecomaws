const express = require('express');
const router = express.Router();
const { getCartItems, addToCart, removeFromCart, clearCart } = require('../controllers/cartController');

// GET /api/cart - Get all cart items
router.get('/', getCartItems);

// POST /api/cart - Add item to cart
router.post('/', addToCart);

// DELETE /api/cart/:id - Remove item from cart
router.delete('/:id', removeFromCart);

// DELETE /api/cart - Clear cart
router.delete('/', clearCart);

module.exports = router;