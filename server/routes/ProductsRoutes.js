import express from "express";
const router = express.Router(); 
import {listAll, show, create, update, remove} from "../controllers/ProductsController";

router.get("/products", listAll);
router.get("/products/:id", show);
router.post("/products", create);
router.post("/products/:id", update);
router.delete("/products", remove);

export default router;