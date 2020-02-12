const express = require('express')
const app = express()
const cardAPI = require('./api/card.api')
const transactionAPI = require('./api/transaction.api')
const scheduledNotificationAPI = require('./api/scheduledNotification.api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true
});
const db = mongoose.connection;
const port = 3000
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Listening~");
});

app.use(bodyParser.json())

app.use(cardAPI)
app.use(transactionAPI)
app.use(scheduledNotificationAPI)

// app.get('/failed', (req, res, next) => {
//   Promise.reject()
//     .then(() => {
//       res.json()
//     })
//     .catch(next);
// })

app.use((req, res, next) => {
  res.status(200).send('ok!')
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send(err)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))