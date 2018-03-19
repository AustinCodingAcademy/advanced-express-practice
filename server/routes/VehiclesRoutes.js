import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/VehiclesController";


router.get("/vehicles", list);
router.get("/vehicles/:vehicleID", show);
router.post("/vehicles", create);
router.put("/vehicles/:vehicleID", update);
router.delete("/vehicles/:vehicleID", remove);

export default router;
