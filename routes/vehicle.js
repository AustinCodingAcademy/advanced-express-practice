const express = require('express');
const router = express.Router();
const {list, create, show} = require('../controllers/vehicle')

// VEHICLES
router.get('/vehicles', list);
router.get('/vehicles/:vehicleId', show);
router.post('/vehicles', create);

module.exports = router;