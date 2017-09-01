import vehicles from "../vehicles";
import VehicleModel from "../models/VehicleModel";

export function list(request, response) {
  VehicleModel.find({}).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
}

export function show(request, response) {
  VehicleModel.findById(request.params.id).exec()
  .then(oneVehicle => {
    return response.json(oneVehicle);
  });
}

export function create(request, response) {

  const vehicle = new VehicleModel({
    year: request.body.year,
    make: request.body.make,
    model: request.body.model
  });

  vehicle.save()
  .then(vehicle => {
    return response.json(vehicle);
  });

}
