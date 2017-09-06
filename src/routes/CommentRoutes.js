import express from "express";
import {list,show,create,update,remove} from "../controllers/CommentController";

const router = express.Router();

router.get("/comments", list);
router.get("/comments", show);
router.post("/comments", create);
router.put("/comments", update);
router.delete("/comments", remove);

export default router;

