import VehicleModel from "../models/VehicleModel";

export function list(req,res) {
  VehicleModel.find({}).exec()
  .then(vehicles => res.json(vehicles))
  .catch(err => console.log(err));
}

export function show(req,res) {
  VehicleModel.findById(req.params.id).exec()
  .then(vehicle => res.json(vehicle))
  .catch(err => console.log(err));
}

export function create(req,res) {
  const {year, make, model} = req.body;
  const vehicle = new VehicleModel({
    year,
    make,
    model
  });
  vehicle.save()
  .then(newVehicle => res.json(newVehicle))
  .catch(err => console.log(err));
}

export function update(req,res) {return res.json({id: req.params.id})}

export function remove(req,res) {return res.json({})}

