import express from "express";
import ProductController from "../controllers/ProductsController";

const router = express.Router();
const productsPath = "/products";

router.post(productsPath, ProductController.create);
router.get(productsPath, ProductController.list);
router.get(productsPath + "/:id", ProductController.listOne);
router.put(productsPath + "/:id", ProductController.update);
router.delete(productsPath + "/:id", ProductController.delete);

export default router;
