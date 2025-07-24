const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    logo: { type: String, required: true },
    text: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
