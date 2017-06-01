import express from "express";
const router = express.Router();
import {list, show, create} from "../controllers/VehicleController";

router.get("/vehicles", list);

router.get("/vehicles/:id", show);

router.post("/vehicles", create);

export default router;
