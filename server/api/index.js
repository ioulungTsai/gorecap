const express = require('express')
const CardTable = require('../tables/CardTable')
const api = express.Router();

api.get('/api/cards', (req, res) => {
  CardTable.find()
    .then(results => {
      res.send(results);
    })
})

api.post('/api/card', (req, res) => {
  const data = req.body;
  data.date = new Date();

  CardTable.create(data)
    .then(result => {
      res.json(result);
    })
})

api.get('/api/card/:id', (req, res) => {
  const id = req.params.id;

  CardTable.findById(id)
    .then(result => {
      res.json(result);
    })
})

api.put('/api/card/:id', (req, res) => {
  const id = req.params.id;

  CardTable.findByIdAndUpdate(id, {
      answer: "I can do it!!"
    }, {
      new: true
    })
    .then(result => {
      res.json(result);
    })
})

api.delete('/api/card/:id', (req, res) => {
  const id = req.params.id;

  CardTable.findByIdAndDelete(id)
    .then(res.send("Card Removed!!"))
})

module.exports = api