const VehicleModel = require("../models/VehicleModel");

module.exports.list = function list(req, res) {
  VehicleModel.find({}).exec()
  .then(vehicle => {
    res.json(vehicle);
  });
};

module.exports.show = function show(req, res) {
  VehicleModel.findById(req.params.id).exec()
  .then(vehicle => {
    res.json(vehicle);
  });
};

module.exports.create = function create(req, res) {
  const newVehicle = new VehicleModel(req.body);
  newVehicle.save()
  .then(savedVehicle => {
    res.json(savedVehicle);
  });
};
