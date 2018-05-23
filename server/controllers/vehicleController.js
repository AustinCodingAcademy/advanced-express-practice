let Vehicle = require("../models/vehicleModel")

module.exports.list =  function list(request, response) {
    Vehicle.find({}).exec()
    .then(vehicles => response.json(vehicles))
};
module.exports.show =  function show(request, response) {
    Vehicle.findById({"_id": request.params.id}).exec()
    .then(vehicle => response.json(vehicle))
};

module.exports.create =  function create(request, response) {
    const newVehicle = new Vehicle(request.body);
    newVehicle.save()
    .then(savedVehicle => response.json(savedVehicle))
};

module.exports.remove =  function remove(request, response) {
    const foundVehicle = vehicles.find(vehicle => vehicle["_id"] == request.params.id)
    vehicles = vehicles.filter(vehicle => vehicle["_id"] != request.params.id)
    return response.json(vehicles);
}