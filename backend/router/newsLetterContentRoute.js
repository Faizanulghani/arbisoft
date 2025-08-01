let express = require("express");
const { isAdmin } = require("../middleware/auth");
const {
  updateNewsLetterContent,
  getNewsLetterContent,
} = require("../controller/NewsLetterContent");
let router = express.Router();

router.post("/", isAdmin, updateNewsLetterContent);
router.get("/", getNewsLetterContent);

module.exports = router;