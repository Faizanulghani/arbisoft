const mongoose = require("mongoose");

const impactSchema = new mongoose.Schema({
  heading: String,
  highlightword: String,
  subheading: String,
});

module.exports = mongoose.model("ImpactContent", impactSchema);
