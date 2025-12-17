const Cart = require('../models/Cart');

// Get all cart items
const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find().sort({ createdAt: -1 });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items', error: error.message });
  }
};

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const { productId, name, price, imageUrl, quantity = 1 } = req.body;

    // Check if item already exists in cart
    const existingItem = await Cart.findOne({ productId });
    
    if (existingItem) {
      // Update quantity if item exists
      existingItem.quantity += quantity;
      const updatedItem = await existingItem.save();
      return res.json(updatedItem);
    }

    // Create new cart item
    const cartItem = new Cart({
      productId,
      name,
      price,
      imageUrl,
      quantity
    });

    const savedItem = await cartItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error: error.message });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing from cart', error: error.message });
  }
};

// Clear cart
const clearCart = async (req, res) => {
  try {
    await Cart.deleteMany({});
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error clearing cart', error: error.message });
  }
};

module.exports = {
  getCartItems,
  addToCart,
  removeFromCart,
  clearCart
};