
let Vehicle = require('../models/VehicleModel.js');

exports.list = function list( req, res ) {
    Vehicle.find((err, vehicles) => {
        if(err) console.error(err);
        return res.json(vehicles);
    })
}

exports.show = function show( req, res ) {

    // let id = Number(req.params.id);
    // let vehicle = vehicles.find( v => v._id === id );
    // return res.json(vehicle);
}

exports.create = function create( req, res ) {
    let body = req.body;
    let newVehicle = new Vehicle({
        year: body.year,
        make: body.make,
        model: body.model
    });
    console.log(newVehicle);
    newVehicle.save((err, vehicle) => {
        if(err) console.error(err);
        return res.json(vehicle);
    });
    // let newVehicle = req.body;
    // newVehicle._id = vehicles[vehicles.length - 1]._id + 1;
    // vehicles.push(newVehicle);
    // return res.json(vehicles);
}