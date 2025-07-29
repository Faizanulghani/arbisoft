const recognitionModel = require("../model/recognitionModel");
const cloudinary = require("../config/cloudinary");
const recognitionImageModel = require("../model/recognitionImageModel");

exports.recognitionTitle = async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    let recognition = await recognitionModel.findOne();
    if (!recognition) {
      recognition = new recognitionModel({ title, subtitle });
    } else {
      recognition.title = title;
      recognition.subtitle = subtitle;
    }
    await recognition.save();
    res.json({ success: true, message: "Updated successfully" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

exports.getRecognition = async (req, res) => {
  try {
    const recognition = await recognitionModel.findOne();
    res.json({ success: true, recognition });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

exports.recognitionImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "recognition",
    });
    let newImage = new recognitionImageModel({ image: result.secure_url });
    await newImage.save();
    res.json({ success: true, message: "Image uploaded" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.getRecognitionImage = async (req, res) => {
  try {
    const image = await recognitionImageModel.find();
    res.json({ success: true, image });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
