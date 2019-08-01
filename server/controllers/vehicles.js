let vehicles = require("../../vehicles");

exports.list = function(req, res, next) {
  return res.json(vehicles);
};

exports.show = function show(req, res) {
  let id = req.params.id;
  let vehicleID = vehicles.find(p => p["_id"] == id);
  return res.json(vehicleID);
};

exports.create = function(req, res) {
  let vehicle = req.body;
  vehicles.push(vehicle);
  return res.json(vehicles);
};
