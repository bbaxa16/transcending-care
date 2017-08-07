const express = require('express')
const app = express()
const mongoose = require('mongoose')
const BodyParser = require('body-parser')
const MethodOverride = require('method-override')
const session = require('express-session')

//middleware

app.use(MethodOverride('_method'))
app.use(BodyParser.urlencoded({extended: false}))


app.use(session({
  secret: 'hi',
  resave: false,
  saveUnitialized: false
}))
const usersController = require('./controllers/users')
app.use('/users', usersController)
const selfcareboardsController = require('./controllers/selfcareboard')
//app.use('/selfcareboard', selfcareboardsController)
const sessionsController = require('./controllers/session.js')
app.use('/sessions', sessionsController)
app.use(express.static('public'))



//Route to landing page
app.get('/', (req, res)=> {
  res.render('index.ejs')
})

//Connecting to mongo
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/transcending-care';

mongoose.connect(mongoUri)

mongoose.connection.once('open', ()=> {
  console.log('mongoin');
})

app.listen(3000, ()=> {
  console.log('listenin bruh');
})
