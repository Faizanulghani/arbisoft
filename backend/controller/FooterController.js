const cloudinary = require("../config/cloudinary");
const Footer = require("../model/footerModel");

exports.getFooter = async (req, res) => {
  try {
    const footer = await Footer.findOne();
    res.json({ success: true, footer });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateFooter = async (req, res) => {
  try {
    const { heading, highlightWords, contactEmail, socialLinks, offices } =
      req.body;

    const parsedHighlightWords = JSON.parse(highlightWords || "[]");
    const parsedSocialLinks = JSON.parse(socialLinks || "{}");
    const parsedOffices = JSON.parse(offices || "[]");
    const existingCertificates = JSON.parse(
      req.body.existingCertificates || "[]"
    );

    let newUploaded = [];
    if (req.files && req.files.certificates) {
      const files = Array.isArray(req.files.certificates)
        ? req.files.certificates
        : [req.files.certificates];

      for (let file of files) {
        const uploaded = await cloudinary.uploader.upload(file.path, {
          folder: "website/footer/certificates",
        });
        newUploaded.push(uploaded.secure_url);
      }
    }

    const certificateUrls = [...existingCertificates, ...newUploaded];

    const footerData = {
      heading,
      highlightWords: parsedHighlightWords,
      contactEmail,
      socialLinks: parsedSocialLinks,
      offices: parsedOffices,
      certificates: certificateUrls,
    };

    let footer = await Footer.findOne();
    if (footer) {
      await Footer.findByIdAndUpdate(footer._id, footerData, { new: true });
    } else {
      footer = await Footer.create(footerData);
    }

    res.json({ success: true, message: "Footer updated successfully", footer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};
