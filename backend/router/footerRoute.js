const express = require("express");
const router = express.Router();
const { getFooter, updateFooter } = require("../controller/footerController");
const { isAdmin } = require("../middleware/auth");
const { upload } = require("../middleware/multer");
const { uploadLogo, getLogo } = require("../controller/footerLogoController");

router.get("/", getFooter);
router.post(
  "/",
  isAdmin,
  upload.fields([{ name: "certificates", maxCount: 10 }]),
  updateFooter
);

router.post("/logoimg", isAdmin, upload.single("image"), uploadLogo);
router.get("/getimg", getLogo);

module.exports = router;
