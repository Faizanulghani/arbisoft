let express = require("express");
const {
  recognitionTitle,
  getRecognition,
  recognitionImage,
  getRecognitionImage,
} = require("../controller/recognitionController");
const { upload } = require("../middleware/multer");
const { isAdmin } = require("../middleware/auth");
let router = express.Router();

router.post("/content", isAdmin, recognitionTitle);
router.get("/content", getRecognition);
router.post("/image", isAdmin, upload.single("image"), recognitionImage);
router.get("/image", getRecognitionImage);

module.exports = router;
