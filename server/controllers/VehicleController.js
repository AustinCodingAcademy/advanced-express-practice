const vehicleModel = require("../models/vehicleModel");

module.exports.list = function list(request, response) {
  vehicleModel.find({}).exec()
 .then(vehicles => {
   response.json(vehicles);
 });
};


module.exports.show = function show(request, response) {
  vehicleModel.findById(request.params.id).exec()
  .then(vehicle => {
    response.json(vehicle);
  });
};
 
module.exports.create = function create(request, response) {
  const newVehicle = new vehicleModel(request.body);
  newVehicle.save()
  .then(savedVehicle => {
    response.json(savedVehicle);
  });
 
};
