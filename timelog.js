const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const TimeLogSchema = new mongoose.Schema({
  url: String,
  timeSpent: Number,
  date: Date,
  userId: String,
});

const TimeLog = mongoose.model('TimeLog', TimeLogSchema);

router.get('/', async (req, res) => {
  try {
    const logs = await TimeLog.find();
    res.json(logs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
router.post('/', async (req, res) => {
  try {
    const newLog = new TimeLog({
      website: req.body.website,
      timeSpent: req.body.timeSpent
    });
    const savedLog = await newLog.save();
    res.json(savedLog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});
module.exports = router;
