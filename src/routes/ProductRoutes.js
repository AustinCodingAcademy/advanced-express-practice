import express from "express";
const router = express.Router();
import products from "../products";

//Products
//make things
router.get('/products', (req,res) => {
  return res.json (products);
})

router.get('/products/:id', (req,res) => {
  const products = products.find(u=>u._id == req.params.id);
  return response.json(product);
})

router.post('/products', (req,res) => {
  products.push(req.body);
  return res.json (req.body);
})

export default router;
