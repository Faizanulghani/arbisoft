const InquiryModel = require("../model/InquiryModel");
const cloudinary = require("../config/cloudinary");

exports.saveInquiry = async (req, res) => {
  try {
    let { title, subtitle,highlightword } = req.body;
    let imageurl = req.file.path;
    const result = await cloudinary.uploader.upload(imageurl, {
      folder: "inquiry",
    });
    let inquiry = await InquiryModel.findOne();
    if (!inquiry) {
      inquiry = new InquiryModel({
        title,
        subtitle,
        highlightword,
        imageurl: result.secure_url,
      });
    } else {
      inquiry.title = title;
      inquiry.subtitle = subtitle;
      inquiry.highlightword = highlightword;
      inquiry.imageurl = result.secure_url;
    }
    await inquiry.save();
    res.json({ success: true, message: "Updated successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.getInquiry = async (req, res) => {
  try {
    let data = await InquiryModel.find();
    res.json({ success: true, data });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
