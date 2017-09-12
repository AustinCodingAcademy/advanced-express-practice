import express from "express";
import {list,show,create,update,remove} from "../controllers/ContactsController";
const router = express.Router();

router.get("/contacts", list);
router.get("/contacts/:id", show);
router.post("/contacts", create);
router.put("/contacts/:id", update);
router.delete("/contacts/:id", remove);

export default router;
