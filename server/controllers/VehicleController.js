let vehicles = require("../vehicles");

exports.list = function list(request, response) {
    return response.json(vehicles);
};
exports.show = function show(request, response) {
    const vehicleId = vehicles.find(vehicle => {return request.params.id == vehicle["_id"] })
    return response.json(vehicleId);
};
exports.create = function create(request, response) {
    const vehicleBody = request.body;
    vehicleBody["_id"] = vehicles.length + 1;
    vehicles.push(vehicleBody);
    return response.json(vehicles);
};
exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
};
exports.remove = function remove(request, response) {
    return response.json({});
}; 
   