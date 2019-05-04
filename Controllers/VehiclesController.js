let vehicles = require('../vehicles');

exports.list = function list( req, res ) {
    return res.json(vehicles);
}

exports.show = function show( req, res ) {
    let id = Number(req.params.id);
    let vehicle = vehicles.find( v => v._id === id );
    return res.json(vehicle);
}

exports.create = function create( req, res ) {
    let newVehicle = req.body;
    newVehicle._id = vehicles[vehicles.length - 1]._id + 1;
    vehicles.push(newVehicle);
    return res.json(vehicles);
}