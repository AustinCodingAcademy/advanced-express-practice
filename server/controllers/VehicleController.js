const vehicles = require("../vehicles");


exports.list = function list(request, response) {
  return response.json(vehicles);
}
exports.show = function show(request, response) {
  return response.json(vehicles.find(vehicle => {return request.params.id==vehicle["_id"]}));
}
exports.create = function create(request, response) {
  const tempBody = request.body
  tempBody["_id"]=Number(vehicles[vehicles.length-1]["_id"])+1
  vehicles.push(tempBody)
  return response.json(vehicles);
}
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  return response.json({});
}