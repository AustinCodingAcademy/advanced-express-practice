const vehicles = require("../vehicles.js");


module.exports.list = function list(req, res) {
  return res.json(vehicles);
};
module.exports.show = function show(req, res) {
  return res.json(vehicles.find(vehicle => vehicle._id == req.params.id));
};
module.exports.create = function create(req, res) {
  const newVehicle = req.body;
  newVehicle._id = (vehicles.length + 1);
  vehicles.push(newVehicle);
  res.json(newVehicle);
};
