const express = require('express')
const selfcareboard = express.Router()


selfcareboard.get('/', (req, res)=> {
  res.send('sup')
})

module.exports = selfcareboard
