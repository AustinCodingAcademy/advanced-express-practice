import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/VehicleController"

router.get("/vehicle", list);
router.get("/vehicle/:id", show);
router.post("/vehicle", create)
router.put("/vehicle/:id", update);
router.delete("/vehicle/:id", remove);

export default router;

