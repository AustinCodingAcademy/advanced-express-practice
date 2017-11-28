import express from 'express';
import {list,show,remove,update,create} from '../controllers/VehiclesController';


const router = express.Router();

router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);
router.put("/vehicles/:id", update);
router.delete("/vehicles/:id", remove);

export default VehicleRoutes;