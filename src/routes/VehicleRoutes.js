import express from "express";
import vehicles from "../vehicles";

const router = express.Route();

router.get("/vehicles", (request, response) => {
  return response.json(vehicles);
});

router.get("/vehicles/:id", (request, response) => {
  const oneVehicle = vehicles.find(vehicle => {
    return vehicle.id === request.params.id;
  });
  return response.json(oneVehicle);
});

router.post("/vehicles", (request, response) => {
  vehicles.push(request.body);
  return response.json(vehicles);
});

export default router;
