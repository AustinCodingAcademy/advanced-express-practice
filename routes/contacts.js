const express = require("express");
const router = express.Router();


// CONTACTS
router.get('contacts', list)
router.get('contacts/contactsId', show)  
router.post('contacts', create)


router.get('/contacts', (req, res) => {
    res.json(contacts)
  })
  
router.get('/contacts/:contactsId', (req,res) => {
    let id = contacts.filter(i => i._id == req.params.contactsId);
     res.json(id)
   })
  
router.post('/contacts', (req, res)=> {
    let newContacts = req.body;
    contacts.push(newContacts)
    res.json(newContacts)
  })

  module.exports = router;