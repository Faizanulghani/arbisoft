const cloudinary = require("../config/cloudinary");
const footerLogoModel = require("../model/footerLogoModel");

exports.uploadLogo = async (req, res) => {
  try {
    const filePath = req.file?.path;
    if (!filePath)
      return res.json({ success: false, message: "No file uploaded" });

    const result = await cloudinary.uploader.upload(filePath, {
      folder: "website/footer",
    });

    let response = await footerLogoModel.findOne();
    if (!response) {
      response = new footerLogoModel({ logoUrl: result.secure_url });
    } else {
      response.logoUrl = result.secure_url;
    }

    await response.save();
    res.json({ success: true, message: "Logo Updated Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.getLogo = async (req, res) => {
  try {
    let data = await footerLogoModel.findOne();
    res.json({ success: true, data });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
