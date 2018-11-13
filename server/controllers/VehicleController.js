let VehicleModel = require("../models/VehicleModel");

module.exports.list =  function list(req, res) {
    VehicleModel.find({active: {$ne:false}}).exec().then(vehicles => {
        return res.send(vehicles);
    }); 
}

module.exports.show =  function show(req, res) {
    VehicleModel.findById(req.params.id).exec().then(vehicle => {
        return res.json(vehicle);
    });
}
   
module.exports.create =  function create(req,res,next){
    const newVehicle= new VehicleModel(req.body);
    newVehicle.save();
    return res.json(vehicles);
}
   
module.exports.update =  function update(req,res,next){
    VehicleModel.findById(req.params.id).exec().then(vehicle => {
        vehicle.make = req.body.make;
        vehicle.model = req.body.model;
        vehicle.year = req.body.year;
        vehicle.active = true;
        return vehicle.save();
    })
    .then(vehicle => {
        return res.json(vehicle);
    });
}
   
module.exports.remove =  function remove(req,res,next){
    VehicleModel.findById(req.params.id).exec().then(vehicle => {
        vehicle.active = false;
        return vehicle.save();
    })
    .then(vehicle => {
        return res.json(vehicle);
    });
}