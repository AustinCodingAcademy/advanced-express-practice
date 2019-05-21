let express = require('express');
let router = express.Router();
let { list, show, create} = require('../controllers/products-c');


router.get('/products', list);
router.get('/products/:id', show);
router.post('/products', create);

module.exports = router;