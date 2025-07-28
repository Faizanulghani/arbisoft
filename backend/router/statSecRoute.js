const express = require("express");
const { isAdmin } = require("../middleware/auth");
const {
  getStatsSection,
  updateStatHeading,
  updateStatItems,
} = require("../controller/statSecController");

const router = express.Router();

router.get("/stat-section", getStatsSection);
router.post("/stat-section/heading", isAdmin, updateStatHeading );
router.post("/stat-section/stats", isAdmin, updateStatItems );

module.exports = router;
