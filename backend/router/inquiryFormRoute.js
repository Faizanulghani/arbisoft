const express = require("express");
const router = express.Router();
const { isAdmin } = require("../middleware/auth");
const {
  createInquiryForm,
  getInquiriesForm,
} = require("../controller/inquiryFormController");

router.post("/", createInquiryForm);
router.get("/", isAdmin, getInquiriesForm);

module.exports = router;
