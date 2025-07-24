const express = require("express");
const { isAdmin } = require("../middleware/auth");
const {
  getStatsSection,
  updateStatsSection,
} = require("../controller/statSecController");

const router = express.Router();

router.get("/stat-section", getStatsSection);
router.post("/stat-section", isAdmin, updateStatsSection);

module.exports = router;
