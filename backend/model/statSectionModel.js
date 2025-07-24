const mongoose = require("mongoose");

const StatItemSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
});

const StatSectionSchema = new mongoose.Schema({
  heading: String,
  stats: [StatItemSchema],
});

module.exports = mongoose.model("StatSection", StatSectionSchema);
