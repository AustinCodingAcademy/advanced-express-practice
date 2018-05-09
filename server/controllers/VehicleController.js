let vehicles = require("../vehicles");

module.exports.list = function list(req, res) {
    return res.json(vehicles)
}

module.exports.show = function show(req, res) {
    res.json(vehicles.find(user=>user._id == req.params.id));
}

module.exports.create = function create (req, res) {
    const newVehicles = req.body;
    vehicles.push(newVehicles);
    return res.json(newVehicles)
}