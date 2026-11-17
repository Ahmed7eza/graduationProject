const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const PORT = process.env.PORT || 3500;
const MONGO_URL = process.env.MONGO_URL;
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");


app.use(express.json());
app.use("/api/auth", authRoutes);

app.use((req, res, next) => {
  return res
    .status(404)
    .json({ status: "Error", message: "Route not found" });
});







mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});