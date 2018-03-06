import express from "express";
import comments from "../data/vehicles";
import { list, show, create, update, remove } from "../controllers/vehController";

const router = express.Router();

router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);
router.put("/vehicles/:id", update);
router.delete("/vehicles/:id", remove);

export default router;