const express = require('express');
const { getProducts, addProduct, getProductById } = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);            // Fetch all products
router.post('/', addProduct);            // Add a new product
router.get('/:id', getProductById);      // Fetch single product by ID

module.exports = router;
