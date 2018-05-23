const express =  require('express');
const router = express.Router();
let {list, show, create, remove} = require( '../controllers/vehicleController');

router.get('/vehicles', list);
router.get('/vehicle/:id', show);
router.post('/vehicles', create);
router.delete('/vehicles/:id', remove);

module.exports =  router;