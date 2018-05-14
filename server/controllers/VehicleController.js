const Vehicle = require("../model/Vehicle");

module.exports.list = function (request, response) {
  Vehicle.find({})
    .exec()
    .then((vehicles) => {
      return response.json(vehicles);
    });
};
module.exports.show = function (request, response) {
  Vehicle.findById({
    _id: request.params.id,
  })
    .exec()
    .then((vehicle) => {
      return response.json(vehicle);
    });
};
module.exports.create = function (request, response) {
  const newContact = new Vehicle(request.body);
  newContact.save().then((vehicle) => {
    return response.json(vehicle);
  });
};
module.exports.update = function (request, response) {
  const vehicle = new Vehicle(request.body);
  vehicle.save().then((saved) => {
    return response.json(saved);
  });
};
module.exports.remove = function (request, response) {
  Vehicle.findByIdAndRemove(request.params.id);
  return response.send("deleted");
};
