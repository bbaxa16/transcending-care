const express = require('express')
const router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcryptjs')

//Route to register a new user
router.get('/register', (req, res, next)=> {
  res.render('users/register.ejs', {})
})

//Route to login to an already existing account
router.get('/login', (req, res, next)=> {
  res.render('users/login.ejs', {message: req.session.message || ''})
})
//Post route from login page
router.post('/login', (req, res, next)=> {
  User.findOne({username: req.body.username}, (err, user)=> {
    if(user){
      if(bcrypt.compareSync(req.body.password, user.password)){
        req.session.message = ''
        req.session.username = req.body.username
        req.session.logged = true

        res.redirect('/users/' + user._id + '/edit')
      } else {
        req.session.message = "Username or password are incorrect"
        res.redirect('/sessions/login')
      }
    } else {
      req.session.message = "Username or password are incorrect"
      res.redirect('/sessions/login')
    }
  })
})

//Post route from registering a new user
router.post('/register', (req, res, next)=> {
  //hash the password
  const password = req.body.password
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  //create an object for db entry
  const userDbEntry = {}
  userDbEntry.username = req.body.username
  userDbEntry.password = passwordHash

  //put password into db
  User.create(userDbEntry, (err, user)=> {
    //set up session here so we can use same code we did for the login
    req.session.username = user.username
    req.session.logged = true
    res.redirect('/')
  })
})

//Route to logout
router.get('/logout', function(req, res){
    req.session.destroy(function(err){
      res.redirect('/')
    })
})

//export this controller
module.exports = router;
