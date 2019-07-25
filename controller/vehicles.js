let vehicles = require("../vehicles");
const assert = require('assert');

// exports.list = function list(req, res) {
//     res.json(vehicles)
// }

exports.list = function(db,callback) {
    // Get the documents collection
    const collection = db.collection('vehicles');
    // Find some documents
    // let found = collection.find();
    collection.toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback();
    });
  }

exports.show = function show(req, res) {
    let vehicle = vehicles.find(p=>p._id == req.params.idNum);
    res.json(vehicle)
}

exports.create = function create(req, res) {
    let newVehicle = req.body;
    vehicles.push(newVehicle);
    res.json(newVehicle)
}

exports.update = function update(req, res) {
    let vehicle = vehicles.find(p=>p._id == req.params.idNum);
    vehicle.make = body.make;
    res.json(vehicle)
}

exports.remove = function remove(req, res) {
    let vehicle = vehicles.find(p=>p._id == req.params.idNum);
    vehicle.isActive = false;
    res.send("deleted")
}