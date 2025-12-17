const Product = require('../models/Product');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

// Add new product
const addProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;

    // Validation
    if (!name || !price || !description || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product({
      name,
      price,
      description,
      imageUrl
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
};

module.exports = {
  getAllProducts,
  addProduct
};