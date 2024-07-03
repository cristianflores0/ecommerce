const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/orders', async (req, res) => {
  const { products, total } = req.body;

  try {
    const newOrder = await Order.create({ products, total });
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

module.exports = router;
