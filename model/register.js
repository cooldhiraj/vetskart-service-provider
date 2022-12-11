const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schema = new Schema({
  fullName: String,
  email: String,
  mobile: String,
  pincode: String
});

module.exports.Register = mongoose.model('Register', schema);