const express = require("express");
const router = express.Router();
const { upload } = require("../middleware/multer");
const {
  getTestimonials,
  createTestimonial,
} = require("../controller/testimonialController");

router.get("/testimonials", getTestimonials);

router.post(
  "/testimonials",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  createTestimonial
);

module.exports = router;
