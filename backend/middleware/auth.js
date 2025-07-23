const jwt = require("jsonwebtoken");

exports.isAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer")) {
    return res.json({ message: "Unauthorized: No token" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ message: "Forbidden: Not admin" });
    }

    next();
  } catch (err) {
    return res.json({ message: "Unauthorized: Invalid token" });
  }
};
