import express from "express";
import {list, show, create} from "../controllers/ProductsController";

const router = express.Router();

router.get("/products",list);

router.get("/products/:id",show);

router.post("/products",create);

export default router;
