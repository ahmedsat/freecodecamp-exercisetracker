const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  userId: String,
  username: String,
  description: String,
  duration: Number,
  date: Date,
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
