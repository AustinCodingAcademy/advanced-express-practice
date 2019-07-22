const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controller/contacts")

router.get("/contacts", list);
router.get("/contacts/:idNum", show);
router.post('/contacts', create);

module.exports = router;