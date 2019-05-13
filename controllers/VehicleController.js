let Vehicle = require("../models/VehicleModel.js")
var ObjectId = require('mongodb').ObjectID;

exports.list =  function list(request, response) {
    Vehicle.find(function (err, vehicles) {
        if (err) return console.error(err);
        return response.json(vehicles)
    })
    
}
exports.show = function show(request, response) {
    let vehicleId =  ObjectId(request.params.id)
    Vehicle.findById(vehicleId, function(err, vehicle) {
        if (err) return console.error(err)
        return response.json(vehicle)
    })
}
exports.create =  function create(request, response) {
    let body  = request.body
    let vehicle = new Vehicle( { year: body.year, make: body.make, model: body.model} )
    vehicle.save(function (err, comment) {
        if (err) return console.error(err);
    });
    return response.json(body);

}
exports.update =  function update(request, response) {
    
}
exports.remove =  function remove(request, response) {
    
}
