import express from "express";
import {list, create, show } from "../controllers/CommentsController";
const router = express.Router();

router.get("/comments", list);

router.get("/comments/:id", show);

router.post("/comments", create);


export default router;
