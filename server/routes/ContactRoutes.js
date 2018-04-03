import express from "express";
import ContactModel from "../models/ContactModel";
// import {list,show,create,update,remove} from "../controllers/ContactController";
import {list,show,create} from "../controllers/ContactController";

const router = express.Router();

router.get("/contacts", list);
router.get("/contacts/:id", show);
router.post("/contacts", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

export default router;
