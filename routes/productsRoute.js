const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controller/productsController")

router.get("/products", list);
// router.get("/products/:idNum", show);
// router.post('/products', create);

module.exports = router;