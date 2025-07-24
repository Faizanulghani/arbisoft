const express = require("express");
const headerRoutes = require("./router/headerRoutes");
const authRoutes = require("./router/authRoutes");
const heroSecRoute = require("./router/heroSecRoute");
const statSecRoute = require("./router/statSecRoute");
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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
