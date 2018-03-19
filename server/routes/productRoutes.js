import express from "express";
import { list, show, create, update, remove } from "../controllers/productController";

const router = express.Router();

router.get("/products", list);
router.get("/product/:id", show);
router.post("/products", create);
router.put("/product/:id", update);
router.delete("/product/:id", remove);

export default router;