import express from "express";
const router = express.Router();
import {list,show,create} from "../controllers/CommentsController";


//Commnets
//make things
router.get('/comments',list);

router.get('/comments/:id',show);

router.post('/comments',create);

export default router;
