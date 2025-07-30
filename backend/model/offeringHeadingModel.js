const mongoose = require("mongoose");

const offeringHeadingSchema = new mongoose.Schema({
  title: String,
  highlightword: String,
  subtitle: String,
});

module.exports = mongoose.model("OfferingHeading", offeringHeadingSchema);
