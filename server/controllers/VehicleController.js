let vehicles = require("../vehicles");

module.exports.list =  function list(request, response) {
  return response.json(vehicles);
 }
 module.exports.show =  function show(request, response) {
    
  response.json(vehicles.find(user => user._id == request.params.id));

 }
 
 module.exports.create =  function create(request, response) {
  const newVehicle = request.body;
  vehicles.push(newVehicle);
  
  return response.json(newVehicle);
 }
 
 