const express = require("express");
const { list, show, create } = require("../controllers/ProductController");

const router = express.Router();

router.get("/", list);
router.get("/:id", show);
router.post("/", create);

module.exports = router;
