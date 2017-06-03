import vehicles from "../vehicles";
import express from "express";
import {list, show, create} from "../controllers/vehicleController";

const router = express.Router();

router.get("/vehicles", list);

router.get("/vehicles/:id", show);

router.post("/vehicles", create);

export default router;