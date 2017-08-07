const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  image: String,
  pronouns: String,
  age: Number,
  username: String,
  password: String
})

module.exports = mongoose.model('UserSchema', UserSchema)
