const EngagementTitleModel = require("../model/EngagementTitleModel");

exports.titleUpdate = async (req, res) => {
  try {
    let { title } = req.body;
    let response = await EngagementTitleModel.findOne();
    if (!response) {
      response = new EngagementTitleModel({ title });
    } else {
      response.title = title;
    }

    await response.save();
    res.json({ success: true, message: "Engagement title updated" });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

exports.getTitle = async (req, res) => {
  try {
    let data = await EngagementTitleModel.find();
    res.json({ success: true, data });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
