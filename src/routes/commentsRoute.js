import express from "express";
import commentsController from "../controllers/commentsController";

const commentRouter = express.Router();

commentRouter.get("/comments", commentsController.list);

commentRouter.post("/comments", commentsController.create);

commentRouter.get("/comments/:id", commentsController.show);

commentRouter.delete("/comments/:id", commentsController.remove);

export default commentRouter;
