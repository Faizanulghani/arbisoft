const express = require("express");
const { isAdmin } = require("../middleware/auth");
const { getTitle, titleUpdate } = require("../controller/EngagementController");

const router = express.Router();

router.get("/gettitle", getTitle);
router.post("/updatetitle", isAdmin, titleUpdate);

module.exports = router;
