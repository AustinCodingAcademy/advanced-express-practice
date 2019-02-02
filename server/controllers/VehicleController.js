let vehicles = require("../vehicles");

// GET request
exports.list = function list(request, response) {
    return response.json(vehicles);
}

// GET with an ID
exports.show = function show(request, response) {
    return response.json(vehicles[request.params.id - 1]);
}

// POST request
exports.create = function create(request, response) {
    const newVehicle = request.body;
    newVehicle["_id"] = vehicles.length + 1;
    vehicles.push(newVehicle);
    return response.json(vehicles);
}

// PUT request
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}

// DELETE request
exports.remove = function remove(request, response) {
    return response.json({});
}