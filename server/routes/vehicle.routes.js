const express = require('express');
const router = express.Router();

const vehicle_controller = require('../controllers/vehicle.controller');


// router.get('/test', product_controller.test);
router.post('/create', vehicle_controller.vehicle_create);
router.get('/:id', vehicle_controller.vehicle_details);
router.put('/:id/update', vehicle_controller.vehicle_update);
router.delete('/:id/delete', vehicle_controller.vehicle_delete);




module.exports = router;