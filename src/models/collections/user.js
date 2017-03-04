const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for the user collection
const UserSchema = new Schema({
  name: String,
  email: String,
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
