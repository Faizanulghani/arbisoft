const express = require("express");
const { isAdmin } = require("../middleware/auth");
const {
  getStatsSection,
  updateStatHeading,
  updateStatItems,
} = require("../controller/statSecController");
const { statImage, getAllImage } = require("../controller/statImageController");
const { upload } = require("../middleware/multer");

const router = express.Router();

router.get("/stat-section", getStatsSection);
router.post("/stat-section/heading", isAdmin, updateStatHeading);
router.post(
  "/stat-section/statimage",
  isAdmin,
  upload.single("image"),
  statImage
);
router.get("/stat-section/statimage", getAllImage);
router.post("/stat-section/stats", isAdmin, updateStatItems);

module.exports = router;
