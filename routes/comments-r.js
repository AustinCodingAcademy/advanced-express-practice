let express = require('express');
let router = express.Router();
let { list, show, create} = require('../controllers/comments-c');


router.get('/comments', list);
router.get('/comments/:id', show);
router.post('/comments', create);

module.exports = router;