var vehicles = require("../../vehicles");


exports.list = function list(request, response) {
  return response.json(vehicles);
}
exports.show = function show(request, response) {
  return response.json( vehicles.find(comment => {return request.params.id == comment["_id"]}) );
}
exports.create = function create(request, response) {  
  let tempBody = request.body;
  tempBody["_id"] = vehicles.length + 1;
  vehicles.push(tempBody);
  return response.json(vehicles);
}
