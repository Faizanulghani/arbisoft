const mongoose = require("mongoose");

const serviceBlockSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  imageUrl: String,
  order: Number,
});

module.exports = mongoose.model("ServiceBlock", serviceBlockSchema);
