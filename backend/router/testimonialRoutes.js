const express = require("express");
const router = express.Router();
const { upload } = require("../middleware/multer");
const {
  getTestimonials,
  createTestimonial,
  getTestimonialTitle,
  updateTestimonialTitle,
} = require("../controller/testimonialController");
const { isAdmin } = require("../middleware/auth");

router.get("/testimonialsTitle", getTestimonialTitle);
router.post("/testimonialsTitle",isAdmin, updateTestimonialTitle);

router.get("/testimonials", getTestimonials);

router.post(
  "/testimonials",isAdmin,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  createTestimonial
);

module.exports = router;
