const express =  require('express');
const router = express.Router();
let {list, show, create, remove} = require( '../controllers/commentController');

router.get('/comments', list);
router.get('/comments/:id', show);
router.post('/comments', create);
router.delete('/comments/:id', remove);

module.exports =  router;