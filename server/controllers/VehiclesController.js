const vehicles = require("../vehicles");

exports.list =  function list(request, response) {
    return response.json(vehicles);
   }
   exports.show = function show(request, response) {
    const viewVehicle = vehicles.find(v=>v._id == request.params.id);
    return response.json(viewVehicle);  
   }
   exports.create =  function create(request, response) {
    console.log('creating stuff')
    const newVehicle = request.body;
    vehicles.push(newVehicle);
    return response.json(newVehicle);
   }
   exports.update =  function update(request, response) {
       
    return response.json({theId: request.params.id});
   }
   exports.remove =  function remove(request, response) {
    return response.json({});
   }