const Vehicle = require('../server/schemas/vehiclesSchema')

exports.create = function(req,res) {
  let item = {
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  };
  let newVehicle = new Vehicle(item)
  newVehicle.save();
}

exports.list = function(req,res) {
  Vehicle.find()
    .then(function(doc) {
      res.render('index:', {items: doc});
    })
}