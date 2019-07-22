const express = require('express');
const router = express.Router();
let contacts = require('../contacts');

// CONTACTS
router.get('/contacts', (req, res) => {
  res.json(contacts)
});

router.get('/contacts/:contactId', (req, res) => {
  let contact = contacts.find(x => x._id == req.params.contactId);
  res.json(contact);
});

router.post('/contacts', (req, res) => {
  let newContact = req.body;
  contacts.push(newContact);
  res.json(newContact);
});

module.exports = router;
