let express = require('express');
let router = express.Router();
const products = require("./products");

router.get('/products', (req, res)=>{
    res.json(products)
  })
  router.get('/products/:id', (req, res)=>{
    let product = products.find(p=>p.id === req.params._id);
    res.json(product)
  })
  router.post('/products', (req,res)=>{
    let newProduct = req.body;
    products.push(newProduct);
  })
module.exports = router