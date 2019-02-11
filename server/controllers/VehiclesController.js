const Vehicle = require("../models/VehicleModel");

exports.list = function list(request, response) {
    Vehicle.find().exec().then((vehicles)=>{
        return response.json(vehicles);
    })
}

exports.show = function show(request, response) {
    Vehicle.findById(request.params.id).exec().then((vehicle)=> {
        return response.json(vehicle);
    })
}

exports.create =  function create(request, response) {
    const newVehicle = new Vehicle({
        year: request.body.year,
        make: request.body.make,
        model: request.body.model
    })
    newVehicle.save().then(savedVehicle=>{
        console.log(savedVehicle)
    })    
}

exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}

exports.remove =  function remove(request, response) {
    return response.json({});
}