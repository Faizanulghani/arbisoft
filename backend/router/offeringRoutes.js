const express = require("express");
const { isAdmin } = require("../middleware/auth");
const {
  getOfferingsByType,
  saveOffering,
  deleteOffering,
} = require("../controller/offeringController");

const router = express.Router();

router.get("/:type", getOfferingsByType);
router.post("/", isAdmin, saveOffering);
router.delete("/:id", isAdmin, deleteOffering);

module.exports = router;
