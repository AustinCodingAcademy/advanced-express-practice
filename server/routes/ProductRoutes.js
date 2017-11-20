import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/ProductController"

router.get("/product", list);
router.get("/product/:id", show);
router.post("/product", create)
router.put("/product/:id", update);
router.delete("/product/:id", remove);

export default router;

