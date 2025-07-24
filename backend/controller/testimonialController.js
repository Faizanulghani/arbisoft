const Testimonial = require("../model/testimonialModel");
const cloudinary = require("../config/cloudinary");

exports.getTestimonials = async (req, res) => {
  const { category } = req.query;
  const filter = category && category !== "All" ? { category } : {};
  const testimonials = await Testimonial.find(filter).sort({ createdAt: -1 });
  res.json(testimonials);
};

exports.createTestimonial = async (req, res) => {
  try {
    const { category, text, name, title } = req.body;

    const logoPath = req.files["logo"]?.[0]?.path;
    const imagePath = req.files["image"]?.[0]?.path;

    const logoUpload = await cloudinary.uploader.upload(logoPath, {
      folder: "testimonials/logo",
    });

    const imageUpload = await cloudinary.uploader.upload(imagePath, {
      folder: "testimonials/reviewers",
    });

    const newTestimonial = new Testimonial({
      category,
      text,
      name,
      title,
      logo: logoUpload.secure_url,
      image: imageUpload.secure_url,
    });

    await newTestimonial.save();
    res.json({ success: true, testimonial: newTestimonial });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};
