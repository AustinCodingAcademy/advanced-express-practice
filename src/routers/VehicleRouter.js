import express from "express";
// @TODO fix bug with VehicleModel
import VehicleController from "../controllers/VehiclesController";

const router = express.Router();
const vehiclesPath = "/vehicles";

// @TODO fix bug with VehicleModel
router.post(vehiclesPath, VehicleController.create);

// @TODO fix bug with VehicleModel
router.get(vehiclesPath, VehicleController.list);

// @TODO fix bug with VehicleModel
router.get(vehiclesPath + "/:id", VehicleController.listOne);

// @TODO fix bug in vehicle model
router.put(vehiclesPath + "/:id", VehicleController.update);

// @TODO fix bug in VehicleModel
router.delete(vehiclesPath + "./:id", VehicleController.delete);

export default router;
