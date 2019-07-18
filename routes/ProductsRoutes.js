const express = require('express');
const router = express.Router();
let products = require("../controllers/ProductControllers");

router.get('/products', products.list);
router.get("/products/:id", products.show);
router.post("/products", products.create);


module.exports = router;