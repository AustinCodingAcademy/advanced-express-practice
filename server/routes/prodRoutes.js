import express from "express";
import comments from "../data/products";
import { list, show, create, update, remove } from "../controllers/prodController";

const router = express.Router();

router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

export default router;