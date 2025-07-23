const Header = require("../model/header");
const cloudinary = require("../config/cloudinary");

exports.getHeader = async (req, res) => {
  const header = await Header.findOne();
  res.send(header);
};

exports.updateLogo = async (req, res) => {
  try {
    const file = req.file.path;
    const result = await cloudinary.uploader.upload(file, {
      folder: "website/header",
    });
    let header = await Header.findOne();
    if (!header) {
      header = new Header({ logoUrl: result.secure_url });
    } else {
      header.logoUrl = result.secure_url;
    }
    await header.save();
    res.json({ success: true, logoUrl: result.secure_url });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
