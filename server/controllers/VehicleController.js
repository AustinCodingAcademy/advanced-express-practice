const Vehicle = require("../models/vehicleModel");

exports.list = function list(request, response) {
    Vehicle.find(function (err, vehicles) {
        if (err) return console.error(err);
        return response.json(vehicles)
      });
};
exports.show = function show(request, response) {
    Vehicle.findById(request.params.id, function(err, vehicles){
        return response.json(vehicles)
    })
    // const vehicleId = vehicles.find(vehicle => {return request.params.id == vehicle["_id"] })
    // return response.json(vehicleId);
};
exports.create = function create(request, response) {
    const vehicleBody = request.body;
    const newVehicle = new Vehicle(vehicleBody);
    newVehicle.save(function (err, newVehicle) {
        if (err) return console.error(err);
        return response.json(newVehicle)
      });
    // vehicleBody["_id"] = vehicles.length + 1;
    // vehicles.push(vehicleBody);
    // return response.json(vehicles);
};
exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
};
exports.remove = function remove(request, response) {
    return response.json({});
}; 
   