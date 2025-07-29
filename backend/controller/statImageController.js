const cloudinary = require("../config/cloudinary");
const statImageModel = require("../model/statImageModel");

exports.statImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "companyLogos",
    });
    let newImage = new statImageModel({ image: result.secure_url });
    await newImage.save();

    res.json({ success: true, message: "Image uploaded" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.getAllImage = async (req, res) => {
  try {
    const data = await statImageModel.find();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
