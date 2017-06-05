import express from "express";
import productsController from "../controllers/productsController";

const productsRouter = express.Router();

productsRouter.get("/products", productsController.list);

productsRouter.post("/products", productsController.create);

productsRouter.get("/products/:id", productsController.show);

productsRouter.delete("/products/:id", productsController.remove);

export default productsRouter;
