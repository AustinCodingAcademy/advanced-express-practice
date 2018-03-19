import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/ProductsController";


router.get("/products", list);
router.get("/products/:productID", show);
router.post("/products", create);
router.put("/products/:productID", update);
router.delete("/products/:productID", remove);

export default router;
