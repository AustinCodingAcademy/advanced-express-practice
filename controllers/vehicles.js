// let vehicles = require("../vehicles");

// //get - returns all 
// exports.list =  function list(request, response) {
//     return response.json(vehicles);
// }
// //get one vehicle by id
//    exports.show = function show(request, response) {
//     let vehicle = vehicles.filter (p=>p._id == request.params.id);
//     response.json(vehicle);
// }

// //post
//    exports.create =  function create(request, response) {
//     let newVehicle = request.body;
//     vehicles.push(newVehicle);
//     response.json(newVehicle)
// }

// //put
//    exports.update =  function update(request, response) {
//     let vehicle = vehicles.find (p=>p._id == request.params.id);
//     vehicle.make = body.make;
//     response.json(vehicle);
// }

// //delete
//    exports.remove =  function remove(request, response) {
//     let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
//     vehicle.isActive = false;
//     response.send("deleted");
// }
   

let VehicleModel = require("../models/vehiclesModel")

exports.list =  function list(request, response) {
   VehicleModel.find((e,v)=>{
       return response.json(v);
   });
}
exports.show = function show(request, response) {
   VehicleModel.findById(request.params.id, (err,v)=>{
       return response.json(v);
   });
}
exports.create =  function create(request, response) {
   let newVehicle = new VehicleModel(request.body);
   newVehicle.save(()=>{
       return response.json(newVehicle);
   });
}
