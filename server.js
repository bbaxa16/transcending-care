const express = require('express')
const app = express()
const Mongoose = require('mongoose')
const BodyParser = require('body-parser')
const MethodOverride = require('method-override')
const usersController = require('./controllers/users')
//middleware
app.use('/users', usersController)
app.use(express.static('public'))




//Route to landing page
app.get('/', (req, res)=> {
  res.render('index.ejs')
})

app.listen(3000, ()=> {
  console.log('listenin bruh');
})
