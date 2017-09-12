import VehicleModel from "../models/VehicleModel";

export function list(request, response) {
  VehicleModel.find({}).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
}
export function show(request, response) {
  let someVehicle = request.params.id;
  let oneVehicle = vehicles.find(function(vehicle){
  return someVehicle == vehicles._id;
  response.json(someVehicle);
 })
}
export function create(request, response) {
  const vehicles = new VehicleModel({
    year: request.body.year,
    make: request.body.make,
    model:request.body.model
  });
  vehicles.save()
    .then(vehicles => {
      return response.json(vehicles);
    })
}
export function update(request, response) {
  return response.json({theId: request.params.id});
}
export function remove(request, response) {
  return response.json({});
}
