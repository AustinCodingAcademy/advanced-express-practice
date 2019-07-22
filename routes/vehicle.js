const express = require('express');
const router = express.Router()
let vehicles = require("../vehicles");

// VEHICLES
router.get('/vehicles', (req, res) => {
    res.json(vehicles)
  });

router.get('/vehicles/:vehicleId', (req, res) => {
  let vehicle = vehicles.find(x => x._id == req.params.vehicleId);
  res.json(vehicle);
});

router.post('/vehicles', (req, res) => {
  let newVehicle = req.body;
  vehicles.push(newVehicle);
  res.json(newVehicle);
});

module.exports = router;