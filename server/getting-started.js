const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Listening~");
});





// TransactionSchema.virtual('card', {
//   ref: 'Card',
//   localField: 'cardId',
//   foreignField: '_id',
//   justOne: true,
// })





// const sampleCard = new CardClass({
//   question: 'ABC',
//   answer: 'Yes'
// });





// const sampleTransaction = new Transaction({
//   cardId: '321',
//   userAnswer: 'Hello'
// });



// const sampleScheduledNotifation = new ScheduledNotifacation({
//   sentDate: 2020-01-28,
//   isOpen: false
// });

const card = {
  question: 'Hello',
  answer: 'hehe',
  category: 'english',
  subCategory: 'conversation',
  questionType: 'b',
  useCount: 1,
  successCount: 0,
  ratio: 0
}

CardClass.create(card)
  .then(result => {
    const transaction = {
      card: result._id,
      createDate: new Date(),
      userAnswer: 'haha',
      isSuccess: true
    }
    const scheduledNotifacation = {
      cardId: result._id,
      scheduleTime: new Date(),
      sentDate: new Date(),
      isSent: false,
      isOpen: false
    }
    return Promise.all([
      Transaction.create(transaction),
      Transaction.create(transaction),
      Transaction.create(transaction),
      ScheduledNotifacation.create(scheduledNotifacation),
    ]);
  })
  .then(results => {
    // console.log(results); // return promise result array
    // return Transaction
    //           .findById(results[0]._id)
    //           .populate('card')
    return Transaction
      .find({
        card: results[0].card._id
      })
      .exec();
  })
  .then(result => {
    console.log(result.length)
  });