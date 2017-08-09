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
//Route for user show page
users.get('/:id', (req, res)=> {
  User.findById(req.params.id, (err, foundUser)=> {
      res.render('users/show.ejs', {
        user: foundUser
      })
    })
  })
//Route to get to edit page
users.get('/:id/edit', (req, res)=> {
  User.findById(req.params.id, (err, foundUser)=> {
    res.render('users/edit.ejs', {
      user: foundUser
    })
  })
})
//Put route for updating user
users.put('/:id', (req, res)=> {
  User.findByIdAndUpdate(req.params.id, req.body, ()=>{
    res.redirect('/selfcare')
  })
})
//Route to delete users
users.delete('/:id', (req, res)=> {
  User.findByIdAndRemove(req.params.id, ()=> {
     res.redirect('/users')
  })
})

module.exports = users;
