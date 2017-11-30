import vehicles from "../vehicles";
import VehicleModel from "../models/VehicleModel";

export function list(request, response) {
  VehicleModel.find({})
    .exec()
    .then(vehicles => {
      return response.json(vehicles);
    });
}

export function show(request, response) {
  VehicleModel.findById(request.params.id)
    .exec()
    .then(vehicle => {
      return response.json(vehicle);
    });
}

export function create(request, response) {
  const vehicle = new VehicleModel(request.body);
  vehicle.save().then(vehicle => response.json(vehicle));
}

export function update(request, response) {
  return response.json((vehicles[0].name = request.params.id));
}
export function remove(request, response) {
  return response.json(vehicles.pop());
}
