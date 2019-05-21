let express = require('express');
let router = express.Router();
let { list, show, create} = require('../controllers/vehicles-c');

router.get('/vehicles', list);
router.get('/vehicles/:id', show);
router.post('/vehicles', create);

module.exports = router;