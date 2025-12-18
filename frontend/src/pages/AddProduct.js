import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.price || !formData.description || !formData.imageUrl) {
      alert('Please fill in all fields');
      return;
    }

    if (formData.price <= 0) {
      alert('Price must be greater than 0');
      return;
    }

    try {
      setLoading(true);
      
      const productData = {
        name: formData.name.trim(),
        price: parseFloat(formData.price),
        description: formData.description.trim(),
        imageUrl: formData.imageUrl.trim()
      };

      await axios.post('https://ecomaws-1.onrender.com/api/products', productData);
      
      alert('Product added successfully!');
      
      // Reset form
      setFormData({
        name: '',
        price: '',
        description: '',
        imageUrl: ''
      });
      
      // Navigate to home page to see the new product
      navigate('/');
      
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Add New Product</h1>
        <p className="text-gray-600">Add a new product to your store</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            {/* Product Name */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Price */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                placeholder="0.00"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                placeholder="Enter product description"
                required
              ></textarea>
            </div>

            {/* Image URL */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL *
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                placeholder="https://example.com/image.jpg"
                required
              />
              <p className="text-gray-500 text-sm mt-1">
                Enter a valid image URL (jpg, png, gif, etc.)
              </p>
            </div>

            {/* Image Preview */}
            {formData.imageUrl && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image Preview
                </label>
                <div className="w-32 h-32 border border-gray-300 rounded-lg overflow-hidden">
                  <img 
                    src={formData.imageUrl} 
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className={`flex-1 py-3 px-6 rounded-lg font-bold text-white transition duration-200 ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? 'Adding Product...' : 'Add Product'}
              </button>
              
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200 font-bold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Sample Image URLs */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-blue-800 mb-3">Sample Image URLs for Testing:</h3>
          <div className="space-y-2 text-sm">
            <p className="text-blue-700">
              <strong>Laptop:</strong> https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500
            </p>
            <p className="text-blue-700">
              <strong>Phone:</strong> https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500
            </p>
            <p className="text-blue-700">
              <strong>Headphones:</strong> https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500
            </p>
            <p className="text-blue-700">
              <strong>Watch:</strong> https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
