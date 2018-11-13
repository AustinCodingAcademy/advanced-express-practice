const vehicles = require("../vehicles");


let VehicleModel = require('../models/VehicleModel');

module.exports.list =  function list(req, res) {
    VehicleModel.find({}).exec()
    .then(vehicle => {
        return res.json(vehicle);
    });

   }
module.exports.show =  function show(req, res) {
    VehicleModel.findById(req.params.id).exec()
    .then(vehicle => {
        return res.json(vehicle);;
     });
    }

module.exports.create =  function create(req, res) {
    let newVehicles = new VehicleModel({
      year: req.body.year,
      make: req.body.make,
      model: req.body.model
    })
    newVehicles.save()
    .then(vehicle=>{
        res.json(vehicle)
    })
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }