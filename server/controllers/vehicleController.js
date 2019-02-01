let vehicles = require("../vehicles");

exports.list =  function list(request, response) {
    return response.json(vehicles);
}
exports.show = function show(request, response) {
    let vehicle = vehicles.find(v=> v._id == request.params.id);
    return response.json(vehicle);
}
exports.create =  function create(request, response) {
    let newVehicle = request.body
    let idArray = [];
    vehicles.forEach(v => idArray.push(v._id));
    newVehicle._id = Math.max(...idArray) +1;
    vehicles.push(newVehicle);
    return response.json(newVehicle);
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}
   