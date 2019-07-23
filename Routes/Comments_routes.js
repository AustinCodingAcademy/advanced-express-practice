let express = require('express');
let router = express.Router();
const {list, show, create} = require("../Controllers/comm_Controller");


router.get('/comments', list)
router.get('/comments/:id', show)
router.post('/comments', create)

module.exports = router