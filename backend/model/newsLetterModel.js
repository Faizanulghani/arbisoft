let mongoose = require("mongoose");

let newsLetterSchema = new mongoose.Schema({
    email: { type: String, required: true },
});

module.exports = mongoose.model("NewsLetter", newsLetterSchema);