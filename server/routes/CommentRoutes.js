import express from "express";
const router = express.Router();
import {listComment,showComment,createComment,updateComment,removeComment}
from "../controllers/CommentsController";

router.get("/comments", listComment);
router.get("/comments/:id", showComment);
router.post("/comments", createComment);
router.put("/comments/:id", updateComment);
router.delete("/comments/:id", removeComment);

export default router;
