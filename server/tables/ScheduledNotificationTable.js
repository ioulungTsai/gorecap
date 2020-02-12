const mongoose = require('mongoose');

const ScheduledNotificationSchema = new mongoose.Schema({
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

const ScheduledNotificationTable = mongoose.model('ScheduledNotifacation', ScheduledNotificationSchema);

module.exports = ScheduledNotificationTable