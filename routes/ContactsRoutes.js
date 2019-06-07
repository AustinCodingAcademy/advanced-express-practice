const express = require('express');
const router = express.Router();
let contacts = require("../controllers/ContactsController");

router.get('/contacts', contacts.list);
router.get("/contacts/:id", contacts.show);
router.post("/contacts", contacts.create);


module.exports = router;