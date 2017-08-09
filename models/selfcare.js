const mongoose = require('mongoose')

const SelfcareSchema = new mongoose.Schema({
  title: String,
  description: String
})

module.exports = mongoose.model('SelfcareSchema', SelfcareSchema)
