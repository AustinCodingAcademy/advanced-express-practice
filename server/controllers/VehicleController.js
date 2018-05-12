const VehicleModel = require("../models/VehicleModel.js");


module.exports.list = function list(req, res) {
  return VehicleModel.find({}).exec().then(vehicles => res.json(vehicles));
};
module.exports.show = function show(req, res) {
  return VehicleModel.findById(req.params.id).exec().then(vehicle => res.json(vehicle)); 
};
module.exports.create = function create(req, res) {
  const newVehicle = new VehicleModel(req.body);
  newVehicle.save().then(savedVehicle => res.json(savedVehicle));
};
// module.exports.update = function update(request, response) {
//   return response.json({theId: request.params.id});
// }
// module.exports.remove = function remove(request, response) {
//   return response.json({});
// }


