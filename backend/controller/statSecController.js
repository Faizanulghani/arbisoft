const StatSection = require("../model/statSectionModel");

exports.getStatsSection = async (req, res) => {
  try {
    const data = await StatSection.findOne();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateStatHeading = async (req, res) => {
  try {
    const { heading, highlightWord } = req.body;
    let section = await StatSection.findOne();
    if (!section) {
      section = new StatSection({ heading, highlightWord });
    } else {
      section.heading = heading;
      section.highlightWord = highlightWord;
    }
    await section.save();
    res.json({ success: true, message: "Heading updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateStatItems = async (req, res) => {
  try {
    const { stats } = req.body;
    let section = await StatSection.findOne();
    if (!section) {
      section = new StatSection({ stats });
    } else {
      section.stats = stats;
    }
    await section.save();
    res.json({ success: true, message: "Stats updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
