const express = require("express");
const { getHeader, updateLogo } = require("../controller/headerController");
const { upload } = require("../middleware/multer");
const { isAdmin } = require("../middleware/auth");

const router = express.Router();

router.get("/", getHeader);
router.put("/logo", isAdmin, upload.single("logo"), updateLogo);

module.exports = router;