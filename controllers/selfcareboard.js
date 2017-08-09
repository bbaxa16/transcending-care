const express = require('express')
const selfcareboard = express.Router()
const Selfcare = require('../models/selfcare.js')

//Route for index to self care tiles
selfcareboard.get('/', (req, res)=> {
  Selfcare.find({}, (err, foundSelfcare)=> {
    res.render('selfcare/index.ejs', {
      selfcare: foundSelfcare
    })
  })
})
//Post route for creating a new self care tile
selfcareboard.post('/', (req, res)=> {

  Selfcare.create(req.body, (err, createdSelfcare)=> {
    res.redirect('/selfcare')
  })
})
//Route to create a new self care tile
selfcareboard.get('/new', (req, res)=> {
  res.render('selfcare/new.ejs')
})
//Route to the show page
selfcareboard.get('/:id', (req, res)=> {
  Selfcare.findById(req.params.id, (err, foundSelfcare)=> {
    res.render('selfcare/show.ejs', {
      selfcare: foundSelfcare
    })
  })
})
//Route to edit a self care tile.
selfcareboard.get('/:id/edit', (req, res)=> {
  res.render('selfcare/edit.ejs')
})
module.exports = selfcareboard
