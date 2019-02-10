let vehiclesModel = require("../Models/vehicles");

// GET request
exports.list = function list(request, response) {
    vehiclesModel.find().exec().then((vehicles)=>{
     return response.json(vehicles);   
    })
}

// GET with an ID
exports.show = function show(request, response) {
    vehiclesModel.findById(request.params.id).exec().then((vehicle)=>{
        return response.json(vehicle);
    })
}

// POST request
exports.create = function create(request, response) {
    const newVehicle = new vehiclesModel({
        year: request.body.year,
        make: request.body.make,
        model: request.body.model
    })
    newVehicle.save().then(savedVehicle => {
        console.log(savedVehicle)
    })
}

// PUT request
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}

// DELETE request
exports.remove = function remove(request, response) {
    return response.json({});
}