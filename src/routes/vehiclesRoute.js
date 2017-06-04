import express from "express";
import vehicleController from "../controllers/vehicleController";

const vehicleRouter = express.Router();

vehicleRouter.get("/vehicles", vehicleController.list);

vehicleRouter.post("/vehicles", vehicleController.create);

vehicleRouter.get("/vehicles/:id", vehicleController.show);

vehicleRouter.delete("/vehicles/:id", vehicleController.remove);

export default vehicleRouter;
