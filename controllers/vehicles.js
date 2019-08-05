let vehicles = require("../vehicles")

//get - returns all vehicles
exports.list = function list(req, res) {
    return res.json(vehicles);
}
//get one vehicle by id
exports.show = function show(req, res) {
    let vehicle = vehicles.find(p => p._id == req.params.id);
    res.json(vehicle);
}
//post
exports.create = function create(req, res) {
    let newVehicle = req.body;
    vehicles.push(newVehicle);
    res.json(newVehicle)
};
//put
exports.update = function update(req, res) {
    let vehicle = vehicles.find(p => p._id == req.params.id);
    vehicle.make = body.make;
    res.json(vehicle)
}
//delete (but not a real delete)
exports.remove = function remove(req, res) {
    let vehicle = vehicles.find(p => p._id == req.params.id);
    vehicle.isActive = false;
    res.send("deleted")
}