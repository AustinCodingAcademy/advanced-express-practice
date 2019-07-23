const vehicles = require("../vehicles");

//get all vehicles
exports.list =  function list(req, res) {
    return res.json(vehicles);
   }
//get one comment by id   
   exports.show = function show(req, res) {
    let vehicle = vehicles.find(v=>v.id === req.params._id);
    res.json(vehicle)
   }
   exports.create =  function create(req, res) {
    let newVehicle = req.body;
    vehicles.push(newVehicle);
    res.json(newVehicle);
   }