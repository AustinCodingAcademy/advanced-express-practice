let vehicles = require('../vehicles');
//get request

exports.list =  function list(request, response) {
    return response.json(vehicles);
   }
   exports.show = function show(request, response) {
    return response.json(vehicles[request.params.id - 1]);
   }
   exports.create =  function create(request, response) {
    const temp = request.body
    temp["_id"] = vehicles.length +1;
    vehicles.push(temp);
    return response.json(temp);
   }
