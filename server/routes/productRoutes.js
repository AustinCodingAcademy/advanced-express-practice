const express =  require('express');
const router = express.Router();
let {list, show, create, remove} = require( '../controllers/productController');

router.get('/products', list);
router.get('/product/:id', show);
router.post('/products', create);
router.delete('/products/:id', remove);

module.exports =  router;