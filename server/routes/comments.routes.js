const express = require('express');
const router = express.Router();

const comment_controller = require('../controllers/comment.controller');


// router.get('/test', product_controller.test);
router.post('/create', comment_controller.comment_create);
router.get('/:id', comment_controller.comment_details);
router.put('/:id/update', comment_controller.comment_update);
router.delete('/:id/delete', comment_controller.comment_delete);




module.exports = router;