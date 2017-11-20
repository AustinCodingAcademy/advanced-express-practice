import express from 'express';
import {list,show,remove,update,create} from '../controllers/CommentsController';

console.log(list);

const router = express.Router();

router.get("/comments", list);
router.get("/comments/:id", show);
router.post("/comments", create);
router.put("/comments/:id", update);
router.delete("/comments/:id", remove);

export default router;