let vehicles = require('../models/VehicleModel');
//get request

exports.list =  function list(request, response) {
    return response.json(vehicles);
   }
   exports.show = function show(request, response) {
    let vehicle = vehicles.find(c=> c._id == request.params.id);
    return response.json(vehicle);
   }

   exports.create =  function create(request, response) {
    const temp = request.body
    temp["_id"] = vehicles.length +1;
    vehicles.push(temp);
    return response.json(temp);
   }
