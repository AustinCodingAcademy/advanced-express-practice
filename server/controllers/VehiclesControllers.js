const mongoose = require('mongoose');
const vehicles = require("../vehicles");
let VehicleModel = require('../models/VehiclesModels')


//defined what each http command will do
// module.exports.list =  function list(request, response) {
//     return response.json(vehicles);
// }

// module.exports.show =  function show(request, response) {
//     return response.json(vehicles.find(user => user._id == request.params.id));
// }

// module.exports.create =  function create(request, response) {
//     const newVehicle = request.body;
//     comments.push(newVehicle);
//     return response.json(newVehicle);
// }

// module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
// }

// module.exports.remove =  function remove(request, response) {
//     return response.json(vehicles.pop(user => user._id == request.params.id))
// }   

// VehicleModel.find({}).exec()
// .then(vehicles => {
//   console.log(vehicles);
// });

// VehicleModel.findById(request.params.id).exec()
// .then(vehicle => {
//  console.log(vehicle);
// });

// const newVehicle= new VehicleModel(request.body);
// newVehicle.save()
// .then(savedVehicle => {
//   response.json(savedVehicle);
// });

// VehicleModel.findById(request.params.id).exec()
// .then(vehicle => {
//   vehicle.year = request.body.year || vehicle.year;
//   vehicle.make = request.body.make || vehicle.make;
//   vehicle.avatar = request.body.avatar ||vehicle.avatar;
//   return vehicle.save();
// })
// .then(vehicle => {
//   response.json(vehicle);
// });

module.exports.list = function list(request, response) {
    VehicleModels.find({}).exec()
    .then(vehicle => {
        response.json(vehicle);
    })
};

module.exports.show = function list(request, response) {
    vehicleModel.findbyID(request.params._id).exec()
    .then(vehicle => {
        response.json(vehicle);
    })
};

module.exports.create =  function create(request, response){
    const newVehicle= new vehicleModel(request.body);
    newVehicle.save()
    .then(savedVehicle => {
        response.json(savedVehicle);
    })
};