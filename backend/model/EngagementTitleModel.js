let mongoose = require("mongoose");

let EngagementTitleModel = new mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model("EngagementTitle", EngagementTitleModel);
