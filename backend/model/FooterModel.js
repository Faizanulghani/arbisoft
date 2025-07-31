const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema({
  city: String,
  phone: String,
  address: String,
});

const footerSchema = new mongoose.Schema({
  heading: String,
  highlightWords: [String],
  contactEmail: String,
  socialLinks: {
    facebook: String,
    twitter: String,
    linkedin: String,
  },
  certificates: [String],
  offices: [officeSchema],
});

module.exports = mongoose.model("Footer", footerSchema);
