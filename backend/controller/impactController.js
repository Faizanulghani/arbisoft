const cloudinary = require("../config/cloudinary");
const impactImageModel = require("../model/impactImageModel");
const impactModel = require("../model/impactModel");

exports.getImpactContent = async (req, res) => {
  const content = await impactModel.findOne();
  res.json({ success: true, data: content });
};

exports.updateImpactContent = async (req, res) => {
  const { heading, highlightword, subheading } = req.body;
  let content = await impactModel.findOne();
  if (!content)
    content = new impactModel({ heading, highlightword, subheading });
  else {
    content.heading = heading;
    content.highlightword = highlightword;
    content.subheading = subheading;
  }
  await content.save();
  res.json({ success: true, message: "Content updated" });
};

exports.uploadImpactImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "impact-logos",
    });
    const newLogo = new impactImageModel({ image: result.secure_url });
    await newLogo.save();
    res.json({ success: true, message: "Image uploaded" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllImpactImages = async (req, res) => {
  const images = await impactImageModel.find();
  res.json({ success: true, data: images });
};
