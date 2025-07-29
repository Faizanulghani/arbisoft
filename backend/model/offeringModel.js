const mongoose = require("mongoose");

const offeringSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["services", "solutions"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Offering", offeringSchema);
