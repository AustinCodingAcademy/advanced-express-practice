import express from "express";
const router = express.Router();
import {list,show,create} from "../controllers/ContactsController";

//Contacts
//make things
router.get('/contacts',list);

router.get('/contacts/:id',show);

router.post('/contacts',create);

export default router;
