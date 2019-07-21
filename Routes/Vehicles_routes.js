let express = require('express');
let router = express.Router();
const vehicles = require("./vehicles");

router.get('/vehicles', (req, res)=>{
    res.json(vehicles)
  })
  router.get('/vehicles/:id', (req, res)=>{
    let vehicle = vehicles.find(v=>v.id === req.params._id);
    res.json(vehicle)
  })  
  router.post('/vehicles', (req,res)=>{
    let newVehicle = req.body;
    vehicles.push(newVehicle);
    res.json(newVehicle);
  })

module.exports = router