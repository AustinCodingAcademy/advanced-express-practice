import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/ContactController"

router.get("/contact", list);
router.get("/contact/:id", show);
router.post("/contact", create)
router.put("/contact/:id", update);
router.delete("/contact/:id", remove);

export default router;

