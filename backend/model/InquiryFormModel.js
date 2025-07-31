const mongoose = require("mongoose");

const inquiryFormSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    service: String,
    phoneCode: String,
    phoneNumber: String,
    message: String,
    budget: String,
    nda: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("InquiryForm", inquiryFormSchema);
