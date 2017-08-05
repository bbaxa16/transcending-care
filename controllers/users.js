const express = require('express')
const users = express.Router()


users.get('/', (req, res)=> {
  res.render('users/index.ejs')
})

users.get('/new', (req, res)=> {
  res.render('users/new.ejs')
})

module.exports = users;
