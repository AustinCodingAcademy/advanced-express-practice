const express =  require('express');
const router = express.Router();
let {list, show, create, remove} = require( '../controllers/contactController');

router.get('/contacts', list);
router.get('/contacts/:id', show);
router.post('/contacts', create);
router.delete('/contacts/:id', remove);

module.exports =  router;