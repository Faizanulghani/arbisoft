const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext !== ".png" && ext !== ".jpeg" && ext !== ".svg") {
    return cb(new Error("Only Images allowed"), false);
  }
  cb(null, true);
};

exports.upload = multer({ storage, fileFilter });
