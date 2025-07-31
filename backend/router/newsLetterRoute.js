let express = require("express");
let router = express.Router();
const {
  addNewsLetter,
  getNewsLetter,
} = require("../controller/newsLetterController");
const { isAdmin } = require("../middleware/auth");

router.post("/", addNewsLetter);
router.get("/", isAdmin, getNewsLetter);

module.exports = router;
