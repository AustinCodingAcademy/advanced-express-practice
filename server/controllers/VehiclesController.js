import VehicleModel from "../models/VehicleModel";


export function list(req, res) {
  VehicleModel.find({}).exec()
 .then(vehicles => {
   return res.json(vehicles);
 });
}
export function show(req, res) {
  let vehicleId = req.params.id;
  let singleVehicle = vehicles.find(function (vehicle) {
    return vehicleId == vehicle._id;
  });
  return res.json(singleVehicle);
}
export function create(req, res) {
  const vehicle = new VehicleModel({
   year: req.body.year,
   make: req.body.make,
   model: req.body.model
 });
 vehicle.save()
 .then(vehicle => {
   return res.json(vehicle);
 });
}
export function update(req, res) {
  return res.json({ theId: req.params.id });
}
export function remove(req, res) {
  return res.json({});
}
