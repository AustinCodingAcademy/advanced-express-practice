const {getDatabase} = require('../database');
let db = getDatabase;
const collection = db.collection('vehicles');

let vehicles = require('../vehicles');

exports.list = function list(request, response) {
    let found = collection.find({});
    found.toArray(function(err, vehicles) {
      response.json(vehicles)
    });
}

exports.create = function(request, response) {
    let newVehicle = request.body;
    collection.insertMany(newVehicle);
    response.json(newVehicle);
}

exports.show = function(request, response) {
    let findVehicle = request.params.vehicleId;
    let vehicle = collection.find({_id: findVehicle});
    response.json(vehicle);
}
