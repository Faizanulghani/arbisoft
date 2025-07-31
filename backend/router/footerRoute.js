const express = require("express");
const router = express.Router();
const { getFooter, updateFooter } = require("../controller/footerController");
const { isAdmin } = require("../middleware/auth");
const { upload } = require("../middleware/multer");

router.get("/", getFooter);
router.post(
  "/",
  isAdmin,
  upload.fields([{ name: "certificates", maxCount: 10 }]),
  updateFooter
);

module.exports = router;
