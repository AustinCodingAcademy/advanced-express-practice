const express = require("express");
const router = express.Router();
const {list, show, create} = require("./controllers/contact");

let contacts = require("../contacts");

//vehicles
router.get('/contacts', list)
router.get('/contacts/:contactId', show)
router.post('/contacts', create)

module.exports = router;