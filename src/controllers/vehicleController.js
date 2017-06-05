import Vehicle from "../models/vehicleModel";

const vehicleController = {};

vehicleController.list = (request, response, next) => {
  Vehicle.find({}).exec()
  .then(Vehicles => {
    return response.json(Vehicles);
  })
  .catch(err => {
    return next(err);
  });
};

vehicleController.remove = (request, response, next) => {
  Vehicle.findByIdAndRemove(request.params.id).exec()
  .then(Vehicles => {
    return response.json(Vehicles);
  })
  .catch(err => {
    return next(err);
  });
};

vehicleController.create = (request, response, next) => {
  const vehicle = new Vehicle(request.body);

  vehicle.save()
  .then(storedVehicle => {
    return response.json(storedVehicle);
  })
  .catch((err) => {
    return next(err);
  });
  //return response.json(vehicle);
};

vehicleController.show = (request, response, next) => {
  Vehicle.findById(request.params.id).exec()
  .then(Users => {
    return response.json(Users);
  })
  .catch(err => {
    return next(err);
  });
};


console.log(vehicleController);
export default vehicleController;
