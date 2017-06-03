import express from "express";
import CommentController from "../controllers/CommentController";

const router = express.Router();

router.get("/comments", CommentController.list);

router.get("/comments/:id", CommentController.show);

router.post("/comments", CommentController.create);

export default router;
