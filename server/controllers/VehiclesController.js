// import vehicles from "../vehicles";
import VehicleModel from "../models/VehicleModel";


export function list(request, response) {
 // return response.json(vehicles);
 let promise = VehicleModel.find({}).exec();
 promise.then(vehicles => {
   return response.json(vehicles)
 })
}

export function show(request, response) {
 // return response.json({theId: request.params.id});
 Vehicle.findOne({id: request.params.id}).exec()
 .then(foundVehicle => {
   return response.json(foundVehicle);
 })
}

export function create(request, response) {
 const vehicle = new VehicleModel({
   year: request.body.year,
   make: request.body.make,
   model: request.body.model
 });
 vehicle.save()
 .then(vehicle => {
   response.json(vehicle);
 });
}

export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json({});
}
