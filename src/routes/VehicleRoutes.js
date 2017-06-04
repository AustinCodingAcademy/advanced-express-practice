import express from "express";
import {list, create, show } from "../controllers/VehiclesController";
const router = express.Router();

router.get("/vehicles", list);

router.get("/vehicles/:id", show);

router.post("/vehicles", create);


export default router;
