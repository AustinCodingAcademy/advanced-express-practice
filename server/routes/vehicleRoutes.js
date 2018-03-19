import express from "express";
import { list, show, create, update, remove } from "../controllers/vehicleController";

const router = express.Router();

router.get("/vehicles", list);
router.get("/vehicle/:id", show);
router.post("/vehicles", create);
router.put("/vehicle/:id", update);
router.delete("/vehicle/:id", remove);

export default router;