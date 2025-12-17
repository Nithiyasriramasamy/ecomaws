import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Buy = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  });

  // Fetch cart items
  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cart');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Handle order placement
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.address || !formData.phone) {
      alert('Please fill in all fields');
      return;
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    try {
      // In a real application, you would send order data to backend
      // For this demo, we'll just clear the cart and show success
      await axios.delete('http://localhost:5000/api/cart');
      setOrderPlaced(true);
      setCartItems([]);
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order. Please try again.');
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-lg">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
            <p className="mb-6">
              Thank you for your order. We'll process it shortly.
            </p>
            <Link 
              to="/" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="text-gray-500 text-xl mb-4">
            Your cart is empty
          </div>
          <p className="text-gray-400 mb-6">
            Add some products before checkout
          </p>
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Checkout</h1>
        <p className="text-gray-600">Complete your order</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center py-4 border-b border-gray-200 last:border-b-0">
                <div className="w-16 h-16 flex-shrink-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Information</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handlePlaceOrder}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your complete address"
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-200 font-bold text-lg"
              >
                Place Order - ${calculateTotal()}
              </button>
            </form>

            <div className="mt-4 text-center">
              <Link 
                to="/cart" 
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;