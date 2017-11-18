const express = require("express");
const router = express.Router();
const controller = require("../controllers/CommentsController");

router.get("/comments", controller.list);
router.get("/comments/:id", controller.show);
router.post("/comments", controller.create);
//router.put("/comments/:id", update);
//router.delete("/comments/:id", remove);

module.exports  = router;