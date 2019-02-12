const Vehicle = require("../models/VehicleModel");

exports.list = function list(request, response) {
  Vehicle.find(function (err, vehicles) {
    if (err) return console.error(err)        
    return response.json(vehicles)
  })}
exports.show = function show(request, response) {
  Vehicle.findById(request.params.id,function (err, vehicles) {
    if (err) return console.error(err)        
    return response.json(vehicles)
  })}
exports.create = function create(request, response) {
  const tempBody = request.body
  const newVehicle = new Vehicle({
    year: tempBody.year,
    make: tempBody.make,
    model: tempBody.model
  });
  newVehicle.save(function (err, vehicles) {
    if (err) return console.error(err)        
    return response.json(vehicles)
  })
}
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  return response.json({});
}