const express = require("express");
const router = express.Router();
const controller = require("../controllers/ProductsController");

router.get("/products", controller.list);
router.get("/products/:id", controller.show);
router.post("/products", controller.create);
//router.put("/products/:id", update);
//router.delete("/products/:id", remove);

module.exports  = router;