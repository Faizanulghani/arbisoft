const newsLetterContentModel = require("../model/newsLetterContentModel");

exports.updateNewsLetterContent = async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    let updatedNewsLetterContent = await newsLetterContentModel.findOne();
    if (!updatedNewsLetterContent) {
      updatedNewsLetterContent = new newsLetterContentModel({
        title,
        subtitle,
      });
    } else {
      updatedNewsLetterContent.title = title;
      updatedNewsLetterContent.subtitle = subtitle;
    }
    await updatedNewsLetterContent.save();
    res.json({ success: true, message: "Updated successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.getNewsLetterContent = async (req, res) => {
  try {
    const data = await newsLetterContentModel.find();
    res.json({ success: true, data });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
