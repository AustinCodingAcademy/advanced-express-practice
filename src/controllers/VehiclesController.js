import VehicleModel from "../models/VehicleModel";

export function list(req, res) {
  VehicleModel.find({}).exec()
 .then(vehicles => {
   return res.json(vehicles);
 });
}

export function create(req, res) {
  const vehicle = new VehicleModel({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  });
  vehicle.save()
   .then(veh => {
     return res.json(veh);
   });
}

export function show(req, res) {
  VehicleModel.findById(req.params.id).exec()
   .then(vehicle => {
     return res.json(vehicle);
   });
}
