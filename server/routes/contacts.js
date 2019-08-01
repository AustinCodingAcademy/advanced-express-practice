var express = require('express')
var router = express.Router();
const{list, show, create} = require('../controllers/contacts');

router.get('/', list)
router.get('/:id', show)
router.post('/', create)

module.exports = router;