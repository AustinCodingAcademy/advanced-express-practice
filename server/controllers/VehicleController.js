let Vehicle = require("../models/VehicleModel");

exports.list =  function list(request, response) {
    const query =Vehicle.find();
    query.exec((err, vehicles) => {
        if (err) return console.error(err);
        return response.json(vehicles);
    }) 
}
exports.show = function show(request, response) {
    const getId = request.params.id
    Vehicle.findById(getId, (err, vehicles) => {
        return response.json(vehicles);
    })
}
exports.create =  function create(request, response) {
    const newInfo = request.body;
    const newVehicle = new Vehicle(newInfo);
    newVehicle.save((err,vehicles) => {
        if (err) return console.error(err);
        return response.json(vehicles);
    })
}
exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
 return response.json({});
}