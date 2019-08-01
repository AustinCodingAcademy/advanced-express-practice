const Vehicle = require('../server/schemas/vehiclesSchema')

exports.create = function create(req,res) {
  let item = {
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  };
  let newVehicle = new Vehicle(item)
  newVehicle.save();
}

exports.list = function list(req,res) {
  Vehicle.find((e,v)=>{
    return res.json(v);
  });
}

exports.show = function show(req, res) {
  Vehicle.findById(req.params.id, (err,v)=>{
      return res.json(v);
  });
}