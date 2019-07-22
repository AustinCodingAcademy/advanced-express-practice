let vehicles = require('../vehicles');

exports.list = function list(request, response) {
    return response.json(vehicles);
}

exports.show = function show(request, response) {
    let vehicle = vehicles.find(x => x._id == request.params.vehicleId);
    response.json(vehicle);
}

exports.create = function create(request, response) {
    let newVehicle = request.body;
    vehicles.push(newVehicle);
    response.json(newVehicle);
}

exports.update = function update(request, response) {
    let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
    vehicle.make = body.make;
    vehicle.year = body.year;
    vehicle.model = body.model;
    response.json(vehicle);
}

exports.remove = function remove(request, response) {
    let vehicle = vehicle.find(i => i._id == request.params.vehicleId);
    vehicle.isActive = false;
    response.send('deleted');
}