const ServiceBlock = require("../model/serviceBlockModel");
const cloudinary = require("../config/cloudinary");
exports.getAllBlocks = async (req, res) => {
  try {
    const blocks = await ServiceBlock.find().sort({ order: 1 });
    res.json({ success: true, blocks });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.saveBlock = async (req, res) => {
  try {
    const { id, title, subtitle, order } = req.body;
    let imageUrl;

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "website/engagement",
      });
      imageUrl = uploadResult.secure_url;
    }

    let block;

    if (id) {
      block = await ServiceBlock.findById(id);
      if (!block) {
        return res.status(404).json({ success: false, message: "Block not found" });
      }

      block.title = title;
      block.subtitle = subtitle;
      block.order = order;

      if (imageUrl) block.imageUrl = imageUrl;

      await block.save();
    } else {
      block = new ServiceBlock({
        title,
        subtitle,
        imageUrl,
        order,
      });
      await block.save();
    }

    res.json({ success: true, message: "Block saved successfully", block });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteBlock = async (req, res) => {
  try {
    const { id } = req.params;
    await ServiceBlock.findByIdAndDelete(id);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
