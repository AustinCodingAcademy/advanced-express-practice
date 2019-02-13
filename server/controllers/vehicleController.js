// let vehicles = require("../vehicles");
let Vehicle = require("../models/VehicleModel")

exports.list =  function list(request, response) {
    // return response.json(vehicles);
    Vehicle.find().exec().then(v=>{
        return response.json(v);
    });
}
exports.show = function show(request, response) {
    // let vehicle = vehicles.find(v=> v._id == request.params.id);
    // return response.json(vehicle);
    Vehicle.findById(request.params.id).exec().then(v=>{
        return response.json(v);
    });
}
exports.create =  function create(request, response) {
    // let newVehicle = request.body
    // let idArray = [];
    // vehicles.forEach(v => idArray.push(v._id));
    // newVehicle._id = Math.max(...idArray) +1;
    // vehicles.push(newVehicle);
    // return response.json(newVehicle);

    //let x = request.body
    //etcetcetc

    let newVehicle = new Vehicle({
        year: request.body.year,
        make: request.body.make,
        model: request.body.model,
    });
    newVehicle.save();
    return response.json(newVehicle);
}
exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}
exports.remove =  function remove(request, response) {
    return response.json({});
}