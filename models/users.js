const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  image: String,
  pronouns: String,
  age: Number
})

module.exports = mongoose.model('UserSchema', UserSchema)
