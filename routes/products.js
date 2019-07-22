const express = require("express");
const router = express.Router();

let products = require("../products");

router.get("/products", (req, res) => {
    res.json(products)
});
  
router.get("/products/:idNum", (req, res) => {
    let product = products.filter(p=>p._id == req.params.idNum);
    res.json(product)
});

router.post('/products', (req,res) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct)
});

  module.exports = router;