const newsLetterModel = require("../model/newsLetterModel");

exports.addNewsLetter = async (req, res) => {
  try {
    let { email } = req.body;
    console.log(email);
    await newsLetterModel.create({ email });
    res.json({ success: true, message: "NewsLetter sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getNewsLetter = async (req, res) => {
  try {
    const newsLetter = await newsLetterModel.find();
    res.json({ success: true, newsLetter });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
