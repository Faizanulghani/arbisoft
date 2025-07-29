let mongoose = require("mongoose");

let testimonialTitleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightword: String,
});

module.exports = mongoose.model("TestimonialTitle", testimonialTitleSchema);
