const mongoose = require("mongoose");

let heroSectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    highlightWord: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("HeroSection", heroSectionSchema);
