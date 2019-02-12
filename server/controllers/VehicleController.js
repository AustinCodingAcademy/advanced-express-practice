//get request
const Vehicle = require(".././models/VehicleModel");

let vehicles = require("../vehicles");
exports.list = function list(request, response) {
    return response.json(contacts);
}
//get with a specific id path
exports.show = function show(request, response) {
    let vehicle =  vehicles.filter(p=>p._id === Number(request.params.id));
    response.json(vehicle);
    // return response.json({ theId: request.params.id });
}
//post request
exports.create = function create(request, response) {
    return response.json({});
}
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}
//delete request
exports.remove = function remove(request, response) {
    return response.json({});
}