// models/Subscription.js
const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
  status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'CANCELLED', 'EXPIRED'], default: 'ACTIVE' },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
