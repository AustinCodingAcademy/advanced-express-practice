import express from "express";
import {list,show,create,update,remove} from "../controllers/ProductController";

const router = express.Router();

router.get("/products", list);
router.get("/products", show);
router.post("/products", create);
router.put("/products", update);
router.delete("/products", remove);

export default router;

