const express = require("express");
const { upload } = require("../middleware/multer");
const { isAdmin } = require("../middleware/auth");
const {
  titleUpdate,
  getTitle,
  getDescription,
  descriptionUpdate,
  updateHeroImg,
  getHeroImg,
} = require("../controller/heroSecController");

const router = express.Router();

router.get("/title", getTitle);
router.put("/title", isAdmin, titleUpdate);
router.get("/description", getDescription);
router.put("/description", isAdmin, descriptionUpdate);
router.get("/hero-img", getHeroImg);
router.put("/hero-img", isAdmin, upload.single("image"), updateHeroImg);

module.exports = router;
