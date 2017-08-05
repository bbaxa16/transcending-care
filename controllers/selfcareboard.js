const express = require('express')
const selfcareboards = express.Router()


selfcareboards.get('/', (req, res)=> {
  res.send('sup')
})

module.exports = selfcareboards
