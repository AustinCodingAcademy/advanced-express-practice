import express from "express";
import comments from "../models/comments";
import { list, show, create, update, remove } from "../controllers/commentController";

const router = express.Router();

router.get("/comments", list);
router.get("/comment/:id", show);
router.post("/comments", create);
router.put("/comment/:id", update);
router.delete("/comment/:id", remove);

export default router;