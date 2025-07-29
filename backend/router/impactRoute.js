const express = require("express");
const { upload } = require("../middleware/multer");
const { isAdmin } = require("../middleware/auth");
const {
  getImpactContent,
  updateImpactContent,
  uploadImpactImage,
  getAllImpactImages,
} = require("../controller/impactController");

const router = express.Router();

router.get("/impact/content", getImpactContent);
router.post("/impact/content", isAdmin, updateImpactContent);

router.post(
  "/impact/image",
  isAdmin,
  upload.single("image"),
  uploadImpactImage
);
router.get("/impact/images", getAllImpactImages);

module.exports = router;
