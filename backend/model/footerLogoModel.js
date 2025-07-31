let mongoose = require("mongoose");

let footerLogoSchema = new mongoose.Schema({
  logoUrl: String,
});

module.exports = mongoose.model("FooterLogo", footerLogoSchema);
