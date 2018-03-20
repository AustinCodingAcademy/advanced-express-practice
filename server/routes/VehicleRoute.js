import express from 'express';
import vehicles from '../vehicles';
import { list, show, create, update, remove } from '../controllers/VehicleController';
const router = express.Router();

router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);
router.put("/vehicles/:id", update);
router.delete("/vehicles/:id", remove);

export default router;
