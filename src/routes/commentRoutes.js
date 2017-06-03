import comments from "../comments";
import express from "express";
import {list, show, create} from "../controllers/commentController";

const router = express.Router();

router.get("/comments", list);

router.get("/comments/:id", show);

router.post("/comments", create);

export default router;