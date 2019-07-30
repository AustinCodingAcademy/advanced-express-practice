const express = require("express");
const router = express.Router();
const {list, create} = require("../controller/contactsController")

router.get("/contacts", list);
//router.post('/contacts', create);

module.exports = router;