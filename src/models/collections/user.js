const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;
// schema for the user collection
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email address',
    },
  },

  password: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
  },

  tokens: [{
    access: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    }
  }],
});

UserSchema.method.createToken = function() {
  const user = this;
  const access = 'auth';
  const token = jwt.sign({}, 'qwe123'); 
}

const User = mongoose.model('user', UserSchema);
module.exports = User;
