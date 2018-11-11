const Vehcile = require("../models/VechicleModel");

function list(req, res) {
  Vehcile.find()
    .exec()
    .then(result => {
      return res.json(result);
    });
}

function show(req, res) {
  Vehcile.findById(req.params.id)
    .exec()
    .then(result => {
      return res.json(result);
    });
}

function create(req, res) {
  const newVehcile = new Vehcile(req.body);
  newVehcile.save().then(savedVehicle => {
    res.json(savedVehicle);
  });
}

module.exports = {
  list,
  show,
  create
};
