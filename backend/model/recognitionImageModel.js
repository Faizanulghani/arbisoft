const mongoose = require("mongoose");

const recognitionImageSchema = new mongoose.Schema({
  image: String,
});

module.exports = mongoose.model("RecognitionImage", recognitionImageSchema);
