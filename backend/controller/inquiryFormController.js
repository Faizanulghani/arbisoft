const InquiryFormModel = require("../model/InquiryFormModel");

exports.createInquiryForm = async (req, res) => {
  try {
    const {
      name,
      email,
      service,
      phoneCode,
      phoneNumber,
      message,
      budget,
      nda,
    } = req.body;

    const inquiryForm = new InquiryFormModel({
      name,
      email,
      service,
      phoneCode,
      phoneNumber,
      message,
      budget,
      nda,
    });

    await inquiryForm.save();
    res.json({ success: true, message: "Inquiry submitted successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getInquiriesForm = async (req, res) => {
  try {
    const inquiries = await InquiryFormModel.find().sort({ createdAt: -1 });
    res.json({ success: true, inquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
