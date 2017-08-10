const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

//Route to users page
users.get('/', (req, res)=> {
  if(req.session.logged){
    User.find({}, (err, foundUsers)=> {
      res.render('users/index.ejs', {
        users: foundUsers
      })
    })
  } else {
    res.redirect('/sessions/login')
  }
})
//Post route for creating a new user
users.post('/', (req, res)=> {
  User.create(req.body, (err, createdUser)=> {
    res.redirect('/users')
  })
})
//Route to create a new user page
users.get('/new', (req, res)=> {
  if(req.session.logged){
    res.render('users/new.ejs')
  } else {
    res.redirect('/sessions/login')
  }
})
//Route for user show page
users.get('/:id', (req, res)=> {
  if(req.session.logged){
    User.findById(req.params.id, (err, foundUser)=> {
      res.render('users/show.ejs', {
        user: foundUser
      })
    })
  } else {
    res.redirect('/sessions/login')
  }
})
//Route to get to edit page
users.get('/:id/edit', (req, res)=> {
  if(req.session.logged){
    User.findById(req.params.id, (err, foundUser)=> {
      res.render('users/edit.ejs', {
        user: foundUser
      })
    })
  } else {
    res.redirect('/sessions/login')
  }
})
//Put route for updating user
users.put('/:id', (req, res)=> {
  User.findByIdAndUpdate(req.params.id, req.body, ()=>{
    res.redirect('/users')
  })
})
//Route to delete users
users.delete('/:id', (req, res)=> {
  User.findByIdAndRemove(req.params.id, ()=> {
     res.redirect('/users')
  })
})

module.exports = users;
