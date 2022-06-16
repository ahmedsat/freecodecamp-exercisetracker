require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URI)
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    })
    .then(() => {
      console.log("MongoDB Connected");
    });
};

module.exports = connectDB;
