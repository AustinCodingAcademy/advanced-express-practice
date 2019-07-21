let express = require('express');
let router = express.Router();
const contacts  = require("./contacts");

router.get('/contacts', (req, res)=>{
    res.json(contacts)
  })
  router.get('/contacts/:id', (req, res)=>{
    let contact = contacts.find(c=>c.id === req.params._id);
    console.log(contact);
    res.json(contact)
  })
  router.post('/contacts', (req,res)=>{
    let newContact = req.body;
    contacts.push(newContact);
    res.json(newContact);
  })
module.exports = router