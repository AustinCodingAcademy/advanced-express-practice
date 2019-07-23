let express = require('express');
let router = express.Router();
const {list, show, create} = require("../Controllers/Cont_Controller");


router.get('/contacts', list)
router.get('/contacts/:id', show)
router.post('/contacts', create)

module.exports = router