const express = require("express");
const router = express.Router();
const {list, show, create} = require("./controllers/product");

let products = require("../vehicles");
//products
router.get('/products', list)
router.get('/products/:productId', show)
router.post('/products', create)

module.exports = router;