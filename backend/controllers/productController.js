const mongoose = require('mongoose');  // Ensure mongoose is imported
const Product = require('../models/product');

// Fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    const formattedProducts = products.map((product) => ({
      ...product.toObject(),
      id: product._id.toString(), // Rename _id to id
    }));

    res.json(formattedProducts);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// Fetch product by ID
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    // Validate if productId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a product
const addProduct = async (req, res) => {
  const { name, price, category, image, stock } = req.body;
  const product = new Product({ name, price, category, image, stock });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

module.exports = { getProducts, addProduct, getProductById };
