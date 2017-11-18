const express = require("express");
const router = express.Router();
const controller = require("../controllers/ContactsController");

router.get("/contacts", controller.list);
router.get("/contacts/:id", controller.show);
router.post("/contacts", controller.create);
//router.put("/contacts/:id", update);
//router.delete("/contacts/:id", remove);

module.exports  = router;