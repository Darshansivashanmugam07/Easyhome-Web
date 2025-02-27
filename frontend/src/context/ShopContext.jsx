import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  products.forEach((product) => {
    cart[product._id] = 0; // Initialize cart with product IDs
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]); // Holds product data fetched from backend
  const [cartItems, setCartItems] = useState({});

  // Fetch all products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products"); // Backend API endpoint
        console.log(response);
        if (!response.data) {
          throw new Error("No products found.");
        }
        setAllProduct(response.data); // Store fetched products
        setCartItems(getDefaultCart(response.data)); // Initialize cart items with product IDs
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  // Add to Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("Cart Updated:", cartItems);
  };

  // Remove from Cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  };

  const contextValue = { all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
