let VehicleModel = require("../models/VehicleModel")

//get - return all vechicles
exports.list = function list(req, res) {
    VehicleModel.find(function (err, vehicles){
        if (err) return  console.error(err);
        return res.json(vehicles);
    })
}

//get one vehicle by id
exports.show = function show(req, res) {
    VehicleModel.findById(req.params.vehicleId, function (err, vehicle){
        if (err) return  console.error(err);
        return res.json(vehicle);
    })
}

//post 
exports.create = function create(req, res) {
    const newVehicle = new VehicleModel(req.body);
    newVehicle.save((err, v) => {
        res.json(v);
    });   
}

//put
exports.update = function update(req, res) {
    let vehicle = vehicles.find(i => i._id == req.params.vehicleId);
    vehicle.make = body.make;
    res.json(vehicle);
}

//delete
exports.remove = function remove(req, res) {
    let vehicle = vehicles.find(i => i._id == req.params.vehicleId);
    vehicle.isActive = false;
    res.send("deleted");
}
