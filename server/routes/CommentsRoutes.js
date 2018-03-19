import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/CommentsController";


router.get("/comments", list);
router.get("/comments/:commentID", show);
router.post("/comments", create);
router.put("/comments/:commentID", update);
router.delete("/comments/:commentID", remove);

export default router;
