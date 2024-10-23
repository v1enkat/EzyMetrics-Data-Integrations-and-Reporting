const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: String,
  platform: String,
  leadsGenerated: Number,
  budget: Number,
  spend: Number,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model('Campaign', campaignSchema);
