// import vehicle from "../vehicles";
import VehiclesModel from "../models/VehiclesModel";

export function list(req,res) {
  VehiclesModel.find({}).exec()
  .then(vehicles => {
    return res.json(vehicles);
  });
}

export function create(req,res) {
  const vehicle = new VehiclesModel({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  });
  vehicle.save()
  .then(v => {
    return res.json(v);
  });
}

export function show(req, res) {
  VehiclesModel.findById(req.params.id).exec()
  .then(vehicle => {
    return res.json(vehicle);
  });
}

// import vehicle from "../vehicles";
//
// export function list(req,res) {
//   return res.json(vehicle);
// }

// export function show(req,res) {
//   const oneVehicle = vehicle.find(u => u._id === req.params.id);
//   return res.json(oneVehicle);
// }

// export function create(req,res) {
//   vehicle.push(req.body);
//   return res.json(req.body);
// }
