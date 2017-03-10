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
    },
  }],
});

UserSchema.methods.toJSON = function () {
  const { _id, email } = this;
  return { _id, email };
};

UserSchema.methods.createToken = function () {
  const user = this;
  const access = 'auth';
  // create a token
  const token = jwt.sign({ _id: user._id.toHexString(), access }, 'qwe123').toString();
  user.tokens.push({ access, token });


  // return the token for the `.then()` func when this method is called
  return user.save()
    .then(() => {
      return token;
    });
};

const User = mongoose.model('user', UserSchema);
module.exports = User;
