let express = require('express');
let router = express.Router();
const {list, show, create} = require("../Controllers/veh_Controller");

router.get('/vehicles', list)
router.get('/vehicles/:id', show)  
router.post('/vehicles', create)

module.exports = router