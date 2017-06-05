import Vehicle from "../models/Vehicle";

const VehicleController = {

  list: (request, response) => {
    Vehicle.find().exec()
      .then(data => {
        return response.json(data);
      })
      .catch(() => {
        return response.json("Error");
      });
  },

  show: (request, response, next) => {
    Vehicle.findById(request.params.id).exec()
      .then((data) => {
        return response.json(data);
      })
      .catch((err) => {
        next(err);
      });
  },

  create: (request, response) => {
    const vehicle = new Vehicle(request.body);

    vehicle.save()
      .then(storedVehicle => {
        console.log("Vehicle was saved");
        return response.json(storedVehicle);
      })
      .catch(() => {
        console.log("Vehicle was NOT saved");
        return response.json("Error");
      });
  }
};

export default VehicleController;
