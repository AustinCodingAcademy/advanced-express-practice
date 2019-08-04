let VehicleModel = require("../models/VehicleModel");

// get - returns all vehicles
exports.list =  function list(request, response) {
    VehicleModel.find(function (err, vehicles) {
        if (err) return console.error(err);
        return response.json(vehicles);
    })
}

// get one vehicle by id
exports.show = function show(request, response) {
    VehicleModel.findById(request.params.vehicleId, function (err, vehicle){
        if (err) return console.error(err);
        return response.json(vehicle);
    })
}
   
// post
exports.create =  function create(request, response) {
    const newVehicle = new VehicleModel(request.body);
    newVehicle.save((err,v) => {
        response.json(v);
    });
}
   
// // put
// exports.update =  function update(request, response) {
//     let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
//     vehicle.make = body.make;
//     response.json(vehicle);
// }

// // delete
// exports.remove =  function remove(request, response) {
//     let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
//     vehicle.isActive = false;
//     response.send("deleted");
//    }
   