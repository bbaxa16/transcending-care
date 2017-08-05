const express = require('express')
const users = express.Router()


users.get('/', (req, res)=> {
  res.render('users/index.ejs')
})

module.exports = users;
