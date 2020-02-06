const mongoose = require('mongoose');

const ScheduledNotifacationSchema = new mongoose.Schema({
  cardId: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'Card'
  },
  scheduleTime: {
    type: Date,
    required: true
  },
  sentDate: Date,
  isSent: {
    type: Boolean,
    required: true
  },
  isOpen: {
    type: Boolean,
    required: true
  }
});

const ScheduledNotifacationTable = mongoose.model('ScheduledNotifacation', ScheduledNotifacationSchema);

module.exports = ScheduledNotifacationTable