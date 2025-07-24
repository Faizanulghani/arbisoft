const StatSection = require("../model/statSectionModel");

exports.getStatsSection = async (req, res) => {
  try {
    const data = await StatSection.findOne();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateStatsSection = async (req, res) => {
  try {
    const { heading, stats } = req.body;

    let section = await StatSection.findOne();
    if (!section) {
      section = new StatSection({ heading, stats });
    } else {
      section.heading = heading;
      section.stats = stats;
    }

    await section.save();
    res.json({ success: true, message: "Stats updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
