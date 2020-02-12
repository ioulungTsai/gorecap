const express = require('express')
const TransactionTable = require('../tables/TransactionTable')
const CardTable = require('../tables/CardTable')
const api = express.Router();

api.get('/api/transactions', (req, res, next) => {
  TransactionTable.find()
    .then(results => {
      res.send(results);
    })
    .catch(() => {
      next('ooops! no transactions!')
    })
})

api.post('/api/transaction', (req, res, next) => {
  const data = req.body;
  data.createDate = new Date();

  CardTable.findById(data.card)
    .then(() => {
      return TransactionTable.create(data)
        .then(result => {
          res.json(result);
        })
        .catch(() => {
          next('can not create transaction')
        })
    })
    .catch(() => {
      res.send('no card!!!')
    })
})

api.get('/api/transaction/:id', (req, res, next) => {
  const {
    id
  } = req.params;

  TransactionTable.findById(id)
    .then(result => {
      if (!result) {
        return Promise.reject('no transaction found')
      }
      res.json(result);
    })
    .catch(next)
})

api.put('/api/transaction/:id', (req, res, next) => {
  const {
    id
  } = req.params;

  TransactionTable.findByIdAndUpdate(id, {
      userAnswer: "I can do it!!"
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

api.delete('/api/transaction/:id', (req, res, next) => {
  const {
    id
  } = req.params;

  TransactionTable.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return Promise.reject('no such transaction')
      }
      res.send("transaction Removed!!")
    })
    .catch(next)
})

module.exports = api