const express = require("express");
const router = express.Router();
const path = "/vehicles";
const {
  list,
  show,
  create,
  update,
  remove,
} = require("../controllers/VehicleController");

router.get(path, list);
router.get(path + "/:id", show);
router.post(path, create);
router.put(path + "/:id", update);
router.delete(path + "/:id", remove);

module.exports = router;
