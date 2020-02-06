const express = require('express')
const app = express()
const api = require('./api')
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

app.use(api)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


