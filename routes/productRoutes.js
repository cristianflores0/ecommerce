const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// Create a new product
router.post('/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

module.exports = router;
