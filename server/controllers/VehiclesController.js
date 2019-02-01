const vehicles = require("../vehicles");

exports.list =  function list(request, response) {
    return response.json(vehicles);
   }
   exports.show = function show(request, response) {
    const vehicle = vehicles.find(v=>v._id == request.params.id);
    return response.json(vehicle);   }
   exports.create =  function create(request, response) {
    return response.json({});
   }
   exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   exports.remove =  function remove(request, response) {
    return response.json({});
   }