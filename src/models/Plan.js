// models/Plan.js
const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: String,
  price: Number,
  features: [String],
  duration: Number // in days
});

module.exports = mongoose.model('Plan', planSchema);
