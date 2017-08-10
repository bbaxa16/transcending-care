const express = require('express')
const selfcareboard = express.Router()
const Selfcare = require('../models/selfcare.js')

//Route for index to self care tiles
selfcareboard.get('/', (req, res)=> {
  if(req.session.logged){
    Selfcare.find({}, (err, foundSelfcare)=> {
      res.render('selfcare/index.ejs', {
        selfcare: foundSelfcare
      })
    })
  } else {
    res.redirect('/sessions/login')
  }
})
//Post route for creating a new self care tile
selfcareboard.post('/', (req, res)=> {

  Selfcare.create(req.body, (err, createdSelfcare)=> {
    res.redirect('/selfcare')
  })
})
//Route to create a new self care tile
selfcareboard.get('/new', (req, res)=> {
  if(req.session.logged){
    res.render('selfcare/new.ejs')
  } else {
    res.redirect('/sessions/login')
  }
})
//Route to the show page
selfcareboard.get('/:id', (req, res)=> {
  if(req.session.logged){
    Selfcare.findById(req.params.id, (err, foundSelfcare)=> {
      res.render('selfcare/show.ejs', {
        selfcare: foundSelfcare
      })
    })
  } else {
      res.redirect('/sessions/login')
  }
})
//Route to edit a self care tile.
selfcareboard.get('/:id/edit', (req, res)=> {
  if(req.session.logged){
    Selfcare.findById(req.params.id, (err, foundSelfcare)=> {
      res.render('selfcare/edit.ejs', {
        selfcare: foundSelfcare
      })
    })
  } else {
      res.redirect('/sessions/login')
  }
})
//Put route to edit tile
selfcareboard.put('/:id', (req, res)=> {
  Selfcare.findByIdAndUpdate(req.params.id, req.body, ()=> {
    res.redirect('/selfcare')
  })
})
//Route to delete a self care tile
selfcareboard.delete('/:id', (req, res)=>{
  Selfcare.findByIdAndRemove(req.params.id, ()=> {
    res.redirect('/selfcare')
  })
})
module.exports = selfcareboard
