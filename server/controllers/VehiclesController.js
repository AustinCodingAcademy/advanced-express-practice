import VehiclesModel from "../models/VehiclesModel";



export function list(request, response) {
    VehiclesModel.find({}).exec()
    .then(vehicles => response.json(vehicles))
  }
export function show(request, response) {
  let id = request.params.id;
  VehiclesModel.findById(id).exec()
  .then(vehicle => response.json(vehicle))
}

  export function create(request, response) {
    const vehicle = new VehiclesModel(request.body);
    vehicle.save()
    .then(vehicle => response.json(vehicle));
}



export function update(request, response) {
  return response.json(vehicles[0].name = request.params.id);
}
export function remove(request, response) {
  return response.json(vehicles.pop());
}