const express = require("express");
const router = express.Router();

let vehicles = require("../vehicles");

router.get("/vehicles", (req, res) => {
    res.json(vehicles)
});
  
router.get("/vehicles/:idNum", (req, res) => {
    let vehicle = vehicles.filter(p=>p._id == req.params.idNum);
    res.json(vehicle)
});

router.post('/vehicles', (req,res) => {
    let newVehicle = req.body;
    vehicles.push(newVehicle);
    res.json(newVehicle)
});

  module.exports = router;