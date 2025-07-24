const HeroSection = require("../model/heroSection");
const cloudinary = require("../config/cloudinary");

exports.getTitle = async (req, res) => {
  const heroSec = await HeroSection.findOne();
  res.send(heroSec);
};

exports.titleUpdate = async (req, res) => {
  try {
    const { title } = req.body;
    let heroSec = await HeroSection.findOne();
    if (!heroSec) {
      heroSec = new HeroSection({ title });
    } else {
      heroSec.title = title;
    }
    await heroSec.save();
    res.json({ success: true, message: "Title updated successfully" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
exports.getDescription = async (req, res) => {
  const heroSec = await HeroSection.findOne();
  res.send(heroSec);
};

exports.descriptionUpdate = async (req, res) => {
  try {
    const { description } = req.body;
    let heroSec = await HeroSection.findOne();
    if (!heroSec) {
      heroSec = new HeroSection({ description });
    } else {
      heroSec.description = description;
    }
    await heroSec.save();
    res.json({ success: true, message: "Description updated successfully" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

exports.getHeroImg = async (req, res) => {
  const heroSec = await HeroSection.findOne();
  res.send(heroSec);
};

exports.updateHeroImg = async (req, res) => {
  try {
    const file = req.file.path;
    const result = await cloudinary.uploader.upload(file, {
      folder: "website/hero",
    });
    let heroSec = await HeroSection.findOne();
    if (!heroSec) {
      heroSec = new HeroSection({ image: result.secure_url });
    } else {
      heroSec.image = result.secure_url;
    }
    await heroSec.save();
    res.json({ success: true, image: result.secure_url });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
