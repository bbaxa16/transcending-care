const express = require('express')
const selfcareboard = express.Router()


selfcareboard.get('/', (req, res)=> {
  res.render('selfcare/index.ejs')
})

module.exports = selfcareboard
