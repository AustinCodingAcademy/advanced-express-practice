import express from "express";
import Vehicle from "../models/Vehicle";

const router = express.Router();

router.get("/vehicles", (request, response) => {
  Vehicle.find().exec()
    .then(data => {
      return response.json(data);
    })
    .catch(() => {
      return response.json("Error");
    });
});

router.get("/vehicles/:id", (request, response, next) => {
  Vehicle.findById(request.params.id).exec()
    .then((vehicle) => {
      return response.json(vehicle);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/vehicles", (request, response) => {
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
});

export default router;
