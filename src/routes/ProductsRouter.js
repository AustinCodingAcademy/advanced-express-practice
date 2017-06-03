import express from "express";
import ProductController from "../controllers/ProductController";

const router = express.Router();

router.get("/products", ProductController.list);

router.get("/products/:id", ProductController.show);

router.post("/products", ProductController.create);

export default router;
