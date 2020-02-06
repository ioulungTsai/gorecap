const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  questionType: {
    type: String,
    enum: ["a", "b", "c"],
    required: true
  },
  useCount: {
    type: Number,
    required: true
  },
  successCount: {
    type: Number,
    required: true
  },
  ratio: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  transactions: [{
    type: mongoose.ObjectId,
    ref: 'Transaction'
  }],
  scheduledNotifacation: {
    type: mongoose.ObjectId,
    ref: 'ScheduledNotifacation'
  }
});

const CardTable = mongoose.model('Card', CardSchema);

module.exports = CardTable