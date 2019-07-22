const express = require('express');
const router = express.Router();
const {list, show, create} = require('../controllers/comment');

// COMMENTS
router.get('/comments', list);
router.get('/comments/:commentId', show);
router.post('/contacts', create);

module.exports = router;