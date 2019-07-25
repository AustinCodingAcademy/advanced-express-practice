let vehicles = require("../vehicles");

exports.list = function list(req, res) {
    res.json(vehicles)
}

exports.show = function show(req, res) {
    let vehicle = vehicles.find(p=>p._id == req.params.idNum);
    res.json(vehicle)
}

exports.create = function create(req, res) {
    let newVehicle = req.body;
    vehicles.push(newVehicle);
    res.json(newVehicle)
}

exports.update = function update(req, res) {
    let vehicle = vehicles.find(p=>p._id == req.params.idNum);
    vehicle.make = body.make;
    res.json(vehicle)
}

exports.remove = function remove(req, res) {
    let vehicle = vehicles.find(p=>p._id == req.params.idNum);
    vehicle.isActive = false;
    res.send("deleted")
}