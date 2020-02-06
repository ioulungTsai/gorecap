const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  card: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'Card'
  },
  createDate: {
    type: Date,
    required: true
  },
  userAnswer: {
    type: String,
    required: true
  },
  isSuccess: {
    type: Boolean,
    required: true
  }
}, {
  toJSON: {
    virtuals: true
  }
});

const TransactionTable = mongoose.model('Transaction', TransactionSchema);

module.exports = TransactionTable