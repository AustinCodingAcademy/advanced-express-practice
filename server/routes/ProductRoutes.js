const express = require("express");
const router = express.Router();
// destructuring so require("<controller route path>") doesn't have to be repeated
const {list, show, create, update, remove} = require(
   "../controllers/ProductController");

router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

module.exports = router;