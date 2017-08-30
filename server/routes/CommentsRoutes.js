import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/CommentsController";


router.get("/comments", list);
router.get("/comments/:id", show);
router.post("/comments", create);
router.put("/comments/:id", update);
router.delete("/comments/:id", remove);

export default router;
