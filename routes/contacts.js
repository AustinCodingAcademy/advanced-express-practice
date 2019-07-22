const express = require("express");
const router = express.Router();

let contacts = require("../contacts");

router.get("/contacts", (req, res) => {
    res.json(contacts)
});
  
router.get("/contacts/:idNum", (req, res) => {
    let contact = contacts.filter(p=>p._id == req.params.idNum);
    res.json(contact)
});

router.post('/contacts', (req,res) => {
    let newContact = req.body;
    contacts.push(newContact);
    res.json(newContact)
});

  module.exports = router;