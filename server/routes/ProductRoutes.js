import express from "express";
import ProductModel from "../models/ProductModel";
// import {list,show,create,update,remove} from "../controllers/ProductController";
import {list,show,create} from "../controllers/ProductController";

const router = express.Router();

router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);
// router.put("/products/:id", update);
// router.delete("/products/:id", remove);

export default router;
