const express = require("express");
const router = express.Router();
const { isAdmin } = require("../middleware/auth");

const {
  getAllBlocks,
  saveBlock,
  deleteBlock,
} = require("../controller/serviceBlockController");
const { upload } = require("../middleware/multer");

router.get("/", getAllBlocks);
router.post("/", isAdmin,upload.single("image"), saveBlock);
router.delete("/:id", isAdmin, deleteBlock);

module.exports = router;
