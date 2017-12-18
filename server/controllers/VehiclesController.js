import vehicles from "../vehicles";
import Vehicle from "../models/vehicles";

export const list = (request, response) => {
  Vehicle.find({}).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
}
export const show = (request, response) => {
  Vehicle.findById(request.params.id).exec()
  .then(vehicle => {
    return response.json(vehicle);
  });
}
export const create = (request, response) => {
  const vehicle = new Vehicle(request.body);
  vehicle.save()
  .then(v => {
    return response.json(v);
  });
}
