const Vehicle = require("../models/VehicleModel");

// GET request
exports.list = function list(request, response) {
    Vehicle.find().exec().then((vehicles) => {
        return response.json(vehicles);
    });
};

// GET with an ID
exports.show = function show(request, response) {
    Vehicle.findById(request.params.id).exec().then((vehicle) => {
        return response.json(vehicle);
    });
};

// POST request
exports.create = function create(request, response) {
    const newVehicle = new Vehicle(
        request.body
    );
    newVehicle.save().then(savedVehicle => {
        response.json(savedVehicle);
    });
};
