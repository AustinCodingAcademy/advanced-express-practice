import express from "express";
const router = express.Router(); 
import {listAll, show, create, update, remove} from "../controllers/CommentsController";

router.get("/comments", listAll);
router.get("/comments/:id", show);
router.post("/comments", create);
router.post("/comments/:id", update);
router.delete("/comments", remove);

export default router;