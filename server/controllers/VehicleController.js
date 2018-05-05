const vehicles = require("../vehicles");

module.exports.list = function (request, response) {
  return response.json(vehicles);
};
module.exports.show = function (request, response) {
  const vehicle = findVehicle(request.params.id);
  return response.json(vehicle);
};
module.exports.create = function (request, response) {
  const newVehicle = request.body;
  vehicles.push(newVehicle);
  return response.json(vehicles[vehicles.length - 1]);
};
module.exports.update = function (request, response) {
  const vehicle = findVehicle(request.params.id);
  vehicle.name += " TEST"; // testing PUT
  return response.json(vehicle);
};
module.exports.remove = function (request, response) {
  const vehicle = findVehicle(request.params.id);
  const i = vehicles.indexOf(vehicle);
  vehicles.splice(i, 1);
  return response.send("deleted");
};

function findVehicle(id) {
  const vehicle = vehicles.find((u) => {
    return u._id === Number(id);
  });
  return vehicle;
}
