const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  reviews: String,
  rating: { type: String, min: 1, max: 5 },
});
const locationSchema = new mongoose.Schema({
  name: String,
  address: String,
  reviews: [reviewSchema],
});
module.exports = mongoose.model("Location", locationSchema);
