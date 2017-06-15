import vehicle from "../vehicles";
import VehicleModel from "../Models/VehicleModel"

export function list(req, res){
  VehicleModel.find({}).exec()
  .then(vehicles => {
    return res.json(vehicles);
  });
}

export function show(request, response){
  VehicleModel.findById(request.params.id).exec()
  .then(vehicle => {
    return response.json(vehicle);
  });
}

export function create(req, res){
  const vehicle = new VehicleModel({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model

  });
  vehicle.save()
  .then(vehicle =>{
    return res.json(vehicle);
  });
}
