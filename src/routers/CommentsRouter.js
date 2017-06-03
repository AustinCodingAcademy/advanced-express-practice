import express from "express";
import CommentController from "../controllers/CommentsController";

const router = express.Router();
const commentsPath = "/comments";

router.post(commentsPath, CommentController.create);
router.get(commentsPath, CommentController.list);
router.get(commentsPath + "/:id", CommentController.listOne);
router.put(commentsPath + "/:id", CommentController.update);
router.delete(commentsPath + "/:id", CommentController.delete);

export default router;
