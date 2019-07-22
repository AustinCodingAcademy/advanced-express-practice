const express = require('express');
const router = express.Router();
const {list, show, create} = require('../controllers/contact');

// CONTACTS
router.get('/contacts', list);
router.get('/contacts/:contactId', show);
router.post('/contacts', create);

module.exports = router;
