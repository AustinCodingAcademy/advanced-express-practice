import vehicles from "../vehicles";
import VehicleModel from "../models/VehicleModel";

export function list(request, response) {
  return response.json(vehicles);
}
export function show(request, response) {
  let someVehicle = request.params.id;
  let oneVehicle = vehicles.find(function(vehicle){
  return someVehicle == vehicles._id;
  response.json(someVehicle);
})
}
export function create(request, response) {
  vehicles.push(request.body)
  return response.json({
    year:request.body.year,
    make:request.body.make,
    model:request.body.model
  });
}
export function update(request, response) {
  return response.json({theId: request.params.id});
}
export function remove(request, response) {
  return response.json({});
}
