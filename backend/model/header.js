const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema(
  {
    logoUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Header", headerSchema);
