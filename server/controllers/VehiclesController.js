// import vehicles from "../vehicles";
import VehicleModel from "../models/VehicleModel";

//GET => List
export function list(request, response) {
  VehicleModel.find({}).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
}

//GET/:id => Show
export function show(request, response) {
 VehicleModel.findById(request.params.id).exec()
 .then(vehicle => {
   return response.json(vehicle);
 });
}

//POST => Create
export function create(request, response) {
  const vehicle = new VehicleModel({
    year: request.body.year,
    make: request.body.make,
    model: request.body.model,
  });
  vehicle.save()
  .then(vehicle => {
    return response.json(vehicle);
  });
}

//PUT/:id => Update
export function update(request, response) {
 VehicleModel.findById(request.params.id).exec()
 .then(vehicle => {
   vehicle.year = request.body.year || vehicle.year;
   vehicle.make = request.body.make || vehicle.make;
   vehicle.model = request.body.model || vehicle.model;
   return vehicle.save();
 })
 .then(vehicle => {
   return response.json(vehicle);
 })
}

//DELETE/:id => Remove
export function remove(request, response) {
 return response.json({});
}
