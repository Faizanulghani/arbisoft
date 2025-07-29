const mongoose = require("mongoose");

const statImageSchema = new mongoose.Schema({
  image: { type: String, required: true },
});

module.exports = mongoose.model("statImages", statImageSchema);
