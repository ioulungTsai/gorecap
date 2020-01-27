const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("haha");
});

const CardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  category: String,
  subCategory: String,
  questionType: {
    type: String,
    enum: ["a", "b", "c"]
  },
  useCount: Number,
  successCount: Number,
  ratio: Number
});

const TransactionSchema = new mongoose.Schema({
  cardId: String,
  createDate: Date,
  userAnswer: String,
  isSuccess: Boolean
});

const ScheduledNotifacationSchema = new mongoose.Schema({
  cardId: String,
  scheduleTime: Date,
  sentDate: Date,
  isSent: Boolean,
  isOpen: Boolean
});

const CardClass = mongoose.model('Card', CardSchema);

const sampleCard = new CardClass({
  question: 'ABC',
  answer: 'Yes'
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

const sampleTransaction = new Transaction({
  cardId: '321',
  userAnswer: 'Hello'
});

const ScheduledNotifacation = mongoose.model('ScheduledNotifacation', ScheduledNotifacationSchema);

const sampleScheduledNotifation = new ScheduledNotifacation({
  sentDate: 2020-01-28,
  isOpen: false
});
