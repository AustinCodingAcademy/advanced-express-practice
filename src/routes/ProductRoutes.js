import express from "express";
import products from "../products";

const router = express.Router();

router.get("/products", (request, response) => {
  return response.json(products);
});

router.get("/products/:id", (request, response) => {
  const oneProduct = products.find(product => {
    return product.id === request.params.id;
  });
  return response.json(oneProduct);
});

router.post("/products", (request, response) => {
  products.push(request.body);
  return response.json(products);
});

export default router;
