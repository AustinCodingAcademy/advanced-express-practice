import VehicleModel from "../models/VehicleModel";

export function list(req, res) {
  VehicleModel.find({}).exec()
    .then(vehicles => {
      return res.json(vehicles);
    });
}

export function show(req, res) {
  VehicleModel.findById(req.params.id).exec()
    .then(vehicle => {
      return res.json(vehicle);
    });
}

export function create(req, res) {
  const { year, make, model } = req.body;
  const vehicle = new VehicleModel({
    year,
    make,
    model
  });
  vehicle.save()
    .then(newVehicle => {
      return res.json(newVehicle);
    });
}
