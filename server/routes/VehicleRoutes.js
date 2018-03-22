import express from "express";
const router = express.Router(); 
import {listAll, show, create, update, remove} from "../controllers/VehicleController";

router.get("/vehicles", listAll);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);
router.post("/vehicles/:id", update);
router.delete("/vehicles", remove);

export default router;