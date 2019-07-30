const express = require("express");
const router = express.Router();
const {list, create} = require("../controller/productsController")

router.get("/products", list);
router.post('/products', create);

module.exports = router;