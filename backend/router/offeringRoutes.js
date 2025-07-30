const express = require("express");
const { isAdmin } = require("../middleware/auth");
const {
  getOfferingsByType,
  saveOffering,
  deleteOffering,
  updateTitle,
  getTitle,
} = require("../controller/offeringController");

const router = express.Router();

router.get("/gettitle", getTitle);
router.get("/:type", getOfferingsByType);
router.post("/updatetitle", isAdmin, updateTitle);
router.post("/", isAdmin, saveOffering);
router.delete("/:id", isAdmin, deleteOffering);

module.exports = router;
