let mongoose = require("mongoose");

let testimonialTitleSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model("TestimonialTitle", testimonialTitleSchema);
