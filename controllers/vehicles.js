let vehicles = require("../vehicles");

// get - returns all vehicles
exports.list =  function list(request, response) {
    return response.json(vehicles);
}

// get one vehicle by id
exports.show = function show(request, response) {
    let id = vehicles.filter(i => i._id == request.params.vehicleId);
    response.json(id)
}
   
// post
exports.create =  function create(request, response) {
    let newVehicle = request.body;
    vehicles.push(newVehicle)
    response.json(newVehicle)
}
   
// put
exports.update =  function update(request, response) {
    let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
    vehicle.make = body.make;
    response.json(vehicle);
}

// delete
exports.remove =  function remove(request, response) {
    let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
    vehicle.isActive = false;
    response.send("deleted");
   }
   