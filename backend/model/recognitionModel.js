let mongoose = require("mongoose");
let recognitionSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
});
module.exports = mongoose.model("Recognition", recognitionSchema);
