import VehicleModel from '../models/VehicleModel';

export const list = (request, response) => {
  VehicleModel.find({}).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
};
export const show = (request, response) => {
  VehicleModel.findById(request.params.id).exec()
  .then(veh => {
    return response.json(veh);
  });
};
export const create = (request, response) => {
  const vehicle = new VehicleModel({
    year: request.body.year,
    make: request.body.make,
    model: request.body.model
  });
  vehicle.save()
  .then(v => {
    return response.json(v);
  });
};
export const update = (request, response) => {
  return response.json({theId: request.params.id});
};
export const remove = (request, response) => {
  return response.json({});
};
