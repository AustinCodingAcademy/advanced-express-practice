import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/ProductsController";


router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

export default router;
