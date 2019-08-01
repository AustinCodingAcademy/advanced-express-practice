const express = require("express");
const router = express.Router();
const {
  list,
  show,
  create,
  update,
  remove
} = require("../controllers/contacts");

router.get("/contacts", list);
router.get("/contacts/:id", show);
router.post("/contacts", create);

module.exports = router;
