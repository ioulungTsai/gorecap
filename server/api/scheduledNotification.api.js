const express = require('express')
const ScheduledNotificationTable = require('../tables/ScheduledNotificationTable')
const api = express.Router()

api.get('/api/scheduledNotifications', (req, res) => {
  ScheduledNotificationTable.find()
    .then(results => {
      res.send(results)
    })
    .catch(() => {
      next('no scheduledNotifacations!!')
    })
})

api.post('/api/scheduledNotification', (req, res, next) => {
  const data = req.body;
  data.date = new Date();

  ScheduledNotificationTable.create(data)
    .then(result => {
      res.json(result);
    })
    .catch(() => {
      next('can not create scheduledNotification')
    })
})

api.get('/api/scheduledNotification/:id', (req, res, next) => {
  const {
    id
  } = req.params;

  ScheduledNotificationTable.findById(id)
    .then(result => {
      if (!result) {
        return Promise.reject('no such scheduledNotification')
      }
      res.json(result);
    })
    .catch(next)
})

api.put('/api/scheduledNotification/:id', (req, res, next) => {
  const {
    id
  } = req.params;

  ScheduledNotificationTable.findByIdAndUpdate(id, {
      isOpen: true
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

api.delete('/api/scheduledNotification/:id', (req, res, next) => {
  const {
    id
  } = req.params;

  ScheduledNotificationTable.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return Promise.reject('no scheduledNotification found')
      }
      res.send("scheduledNotification Removed!!")
    })
    .catch(next)
})

module.exports = api