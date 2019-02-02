let vehicles = require("../vehicles");

exports.list =  function list(request, response) {
 return response.json(vehicles);
}
exports.show = function show(request, response) {
 const getId = request.params.id;   
 return response.json(vehicles[getId -1]);
}
exports.create =  function create(request, response) {
 const newVehicle = request.body;
 newVehicle._id = vehicles.length+1;
 vehicles.push(newVehicle);
 return response.json(vehicles);
}
exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
 return response.json({});
}