const express = require("express");
const headerRoutes = require("./router/headerRoutes");
const authRoutes = require("./router/authRoutes");
const heroSecRoute = require("./router/heroSecRoute");
const statSecRoute = require("./router/statSecRoute");
const testimonialRoutes = require("./router/testimonialRoutes");
const impactRoute = require("./router/impactRoute");
const recognitionRoute = require("./router/recognitionRoute");
const offeringRoutes = require("./router/offeringRoutes");
const engagementRoute = require("./router/engagementRoute");
const serviceBlockRoute = require("./router/serviceBlockRoute");
const inquiryRoute = require("./router/inquiryRoute");
const inquiryFormRoute = require("./router/inquiryFormRoute");

const cors = require("cors");
const connectDB = require("./config/config");
const env = require("dotenv");
env.config();
const app = express();

app.use(express.json());
connectDB();

app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/header", headerRoutes);
app.use("/api/admin", authRoutes);
app.use("/api/hero-section", heroSecRoute);
app.use("/api", statSecRoute);
app.use("/api", testimonialRoutes);
app.use("/api", impactRoute);
app.use("/api/recognition", recognitionRoute);
app.use("/api/offerings", offeringRoutes);
app.use("/api/engagement", engagementRoute);
app.use("/api/serviceblock", serviceBlockRoute);
app.use("/api/inquiry", inquiryRoute);
app.use("/api/inquiryform", inquiryFormRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
