import express from "express";
import { list, show, create } from "../controllers/CommentController";
const router = express.Router();

//Getting the data... the entire list
router.get("/comments", list);


//Getting the data... just one entity
router.get("/comments/:id", show);


//posting new entries to the database
router.post("/comments", create);

export default router;
