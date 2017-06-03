import express from "express";
import VehicleController from "../controllers/VehicleController";

const router = express.Router();

router.get("/vehicles", VehicleController.list);

router.get("/vehicles/:id", VehicleController.show);

router.post("/vehicles", VehicleController.create);

export default router;
