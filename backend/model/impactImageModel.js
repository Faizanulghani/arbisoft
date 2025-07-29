const mongoose = require("mongoose");

const impactImageSchema = new mongoose.Schema({
  image: String,
});

module.exports = mongoose.model("ImpactImage", impactImageSchema);
