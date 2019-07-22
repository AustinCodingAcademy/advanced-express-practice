const express = require('express');
const router = express.Router();
let products = require('../products');

// PRODUCTS
router.get('/products', (req, res) => {
  res.json(products);
});

router.get('/products/:productsId', (req, res) => {
  let product = products.find(x => x._id == req.params.productsId);
  res.json(product);
});

router.post('/products', (req, res) => {
  let newProduct = req.body;
  products.push(newProduct);
  res.json(newProduct);
});

module.exports = router;