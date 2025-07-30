let mongoose = require("mongoose");

let inquirySchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  highlightword: String,
  imageurl: String,
});

module.exports = mongoose.model("Inquiry", inquirySchema);
