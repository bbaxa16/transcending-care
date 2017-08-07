const express = require('express')
const app = express()
const Mongoose = require('mongoose')
const BodyParser = require('body-parser')
const MethodOverride = require('method-override')
const session = require('express-session')

//middleware
app.use(session({
  secret: 'hi',
  resave: false,
  saveUnitialized: false
}))
const usersController = require('./controllers/users')
app.use('/users', usersController)
//const selfcareboardsController = require('./controllers/selfcareboards')
//app.use('/selfcareboards', selfcareboardsController)
const sessionsController = require('./controllers/session.js')
app.use('/sessions', sessionsController)
app.use(express.static('public'))




//Route to landing page
app.get('/', (req, res)=> {
  res.render('index.ejs')
})

app.listen(3000, ()=> {
  console.log('listenin bruh');
})
