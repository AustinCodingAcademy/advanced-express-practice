// const vehicles = require('../vehicles');
// vehicle model
const Vehicle = require("../models/VehicleModel");

// get request
module.exports.list = (request, response) => {
  Vehicle.find({}).exec().then((vehicles) => {
    return response.json(vehicles);
  });
  // hardcoded:
  // return response.json(vehicles);
};

// get by id request
module.exports.show = (request, response) => {
  Vehicle.findById(request.params.id).exec().then((vehicle) => {
    return response.json(vehicle);
  });
  // hardcoded:
  // const vehicle = vehicles.find(v=>v._id == v.response.params.id);
  // return response.json(vehicle);
};

// post request
module.exports.create = (request, response) => {
  const v = new Vehicle({
    year: request.body.year,
    make: request.body.make,
    model: request.body.model
  });
  v.save().then(saveV => {
    return response.json(saveV);
  });
  // hardcoded:
  // const vehicle = request.body;
  // vehicles.push(vehicle);
  // return response.json(vehicle);
};

// put request
exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};

// delete request
exports.remove = function remove(request, response) {
  return response.json({});
};
