let express = require('express');
let router = express.Router();
const {list, show, create} = require("../Controllers/Prod_Controller");

router.get('/products', list)
router.get('/products/:id', show)
router.post('/products', create)

module.exports = router