const vehicles = require("../vehicles");
let vehicleCount = vehicles.length

module.exports.list =  function list(req, res) {
    return res.json(vehicle);
   }
module.exports.show =  function show(req, res) {
    let vehicle = vehicles.find((v) => v._id == req.params._id);
    return res.json(vehicle);
   }
module.exports.create =  function create(req, res) {
    let newVehicles = req.body;
    vehicles.push(newVehicles);
    vehicleCount++;
    newVehicles._id = vehicleCount;
    return res.json(newVehicles);
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }