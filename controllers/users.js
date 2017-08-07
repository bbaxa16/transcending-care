const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

//Route to users page
users.get('/', (req, res)=> {
  User.find({}, (err, foundUsers)=> {
    res.render('users/index.ejs', {
      users: foundUsers
    })
  })
})
//Post route for creating a new user
users.post('/', (req, res)=> {
  User.create(req.body, (err, createdUser)=> {
    res.redirect('/users')
  })
})
//Route to create a new user page
users.get('/new', (req, res)=> {
  res.render('users/new.ejs')
})

module.exports = users;
