let express = require("express");

let router = express.Router();

const { getInquiry, saveInquiry } = require("../controller/inquiryController");
const { isAdmin } = require("../middleware/auth");
const { upload } = require("../middleware/multer");

router.get("/", getInquiry);
router.post("/", isAdmin, upload.single("image"), saveInquiry);

module.exports = router;
