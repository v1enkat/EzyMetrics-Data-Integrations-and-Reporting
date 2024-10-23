const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  status: String,
  source: String,
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lead', leadSchema);
