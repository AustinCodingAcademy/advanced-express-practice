const express = require("express");
const {
  list,
  show,
  create,
  update,
  remove
} = require("../controllers/ProductController");

const router = express.Router();

router.get("/", list);
router.get("/:id", show);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
