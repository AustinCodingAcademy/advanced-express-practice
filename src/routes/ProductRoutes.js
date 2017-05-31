import express from "express";
import {list, create, show } from "../controllers/ProductsController";
const router = express.Router();

router.get("/products", list);

router.get("/products/:id", show);

router.post("/products", create);


export default router;
