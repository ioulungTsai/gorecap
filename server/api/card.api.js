const express = require('express')
const CardTable = require('../tables/CardTable')
const api = express.Router();

api.get('/api/cards', (req, res, next) => {
  CardTable.find()
    .then(results => {
      res.send(results);
    })
    .catch(() => {
      next('ooops! no cards!')
    })
})

api.post('/api/card', (req, res, next) => {
  const data = req.body;
  data.date = new Date();

  CardTable.create(data)
    .then(result => {
      res.json(result);
    })
    .catch(() => {
      next('can not create card')
    })
})

api.get('/api/card/:id', (req, res, next) => {
  const {
    id
  } = req.params;

  CardTable.findById(id)
    .then(result => {
      if (!result) {
        return Promise.reject('no such card')
      }
      res.json(result);
    })
    .catch(next)
})

api.put('/api/card/:id', (req, res, next) => {
  const {
    id
  } = req.params;

  CardTable.findByIdAndUpdate(id, {
      answer: "I can do it!!"
    }, {
      new: true
    })
    .then(result => {
      res.json(result);
    })
    .catch(() => {
      next("updated fail")
    })
})

api.delete('/api/card/:id', (req, res, next) => {
  const {
    id
  } = req.params;

  CardTable.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return Promise.reject('no card found')
      }
      res.send("Card Removed!!")
    })
    .catch(next)
})

module.exports = api