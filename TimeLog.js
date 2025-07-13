const mongoose = require('mongoose');

const TimeLogSchema = new mongoose.Schema({
  url: String,
  timeSpent: Number,
  date: { type: Date, default: Date.now },
  userId: String
});

module.exports = mongoose.model('TimeLog', TimeLogSchema);
