let vehicles = require('../vehicles');

exports.list = (req, res )=> {
    return res.json(vehicles);
}

exports.show = ( req, res )=> {
    let id = Number(req.params.id);
    let vehicle = vehicles.find( element => element._id === id );
    return res.json(vehicle);
}

exports.create = ( req, res )=> {
    let addVehicle = req.body;
    addVehicle._id = vehicles[vehicles.length - 1]._id + 1;
    vehicles.push(addVehicle);
    return res.json(addVehicle);
}