import express from "express";
const router = express.Router(); 
import {list, show, create, update, remove} from "../controllers/VehicleController";

router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);
router.post("/vehicles/:id", update);
router.delete("/vehicles", remove);

export default router;