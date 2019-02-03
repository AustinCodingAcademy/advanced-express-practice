const vehicles = require('../vehicles');

// get request
exports.list = function list(request, response) {
  return response.json(vehicles);
};

// get by id request
exports.show = function show(request, response) {
  const vehicle = vehicles.find(v=>v._id == v.response.params.id);
  return response.json(vehicle);
};

// post request
exports.create = function create(request, response) {
  const vehicle = request.body;
  vehicles.push(vehicle);
  return response.json(vehicle);
};

// put request
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};

// delete request
exports.remove = function remove(request, response) {
  return response.json({});
};
