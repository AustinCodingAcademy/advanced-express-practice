const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/vehicles")


// VEHICLES
router.get('/vehicles', list)
router.get('/vehicles/:vehicleId', show)  
router.post('/vehicles', create)

  module.exports = router;