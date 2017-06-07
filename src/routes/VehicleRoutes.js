import express from "express";
import vehicles from "../vehicles";
import {list, show, create} from "../controllers/VehiclesController";

const router = express.Router();

router.get("/vehicles", list);

router.get("/vehicles/:id", show);

router.post("/vehicles", create);

export default router;