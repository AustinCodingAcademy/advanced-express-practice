import express from "express";
import { list, show, create } from "../controllers/VehicleController";
const router = express.Router();

//Getting the data... the entire list
router.get("/vehicles", list);


//Getting the data... just one entity
router.get("/vehicles/:id", show);


//posting new entries to the database
router.post("/vehicles", create);

export default router;
