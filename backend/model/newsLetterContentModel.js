const mongoose = require("mongoose");

const newsLetterContentSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
});

module.exports = mongoose.model("NewsLetterContent", newsLetterContentSchema);
