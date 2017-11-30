//const vehicles = require("../vehicles");
const Vehicle = require("../models/Vehicle");

function list(request, response) {
    Vehicle.find({}).exec()
    .then(vehicles => {
        return response.json(vehicles); 
    });
}

function show(request, response) {
    Vehicle.findById(request.params.id).exec()
    .then(vehicle => {
      return response.json(vehicle);
    });
}

function create(request, response) {
    const vehicle= new Vehicle({
        year: request.body.year,
        make: request.body.make,
        model: request.body.model,
    });
    vehicle.save()
    .then(vehicles => {
      return response.json(vehicles);
    });
}

module.exports = {
    list,
    show,
    create
}

/*export function update(request, response) {
    return response.json({theId: request.params.id});
}

export function remove(request, response) {
    return response.json({});
}*/