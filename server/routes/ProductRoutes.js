import express from "express";
import { list, show, create } from "../controllers/ProductController";
const router = express.Router();

//Getting the data... the entire list
router.get("/products", list);


//Getting the data... just one entity
router.get("/products/:id", show);


//posting new entries to the database
router.post("/products", create);

export default router;
