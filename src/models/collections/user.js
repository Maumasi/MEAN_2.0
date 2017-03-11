const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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

// only return SOME of the use's props
UserSchema.methods.toJSON = function () {
  const { _id, email } = this;
  return { _id, email };
};

// create a token for the user for authentication
UserSchema.methods.createToken = function () {
  const access = 'auth';
  // create a token
  const token = jwt.sign({ _id: this._id.toHexString(), access }, 'qwe123').toString();
  this.tokens.push({ access, token });
  // return the token for the `.then()` func when this method is called
  return this.save()
    .then(() => {
      return token;
    });
};


// custom query method for the user
UserSchema.statics.findByToken = function (token) {
  let decrypt;
  // prevent app from crashing if JWT verification fails
  try {
    decrypt = jwt.verify(token, 'qwe123');
  } catch (e) {
    // force the .catch() for this, .findByOne()
    return Promise.reject();
  }

  this.findByOne({
    _id: decrypt._id,
    'tokens.token': token,
    'tokens.auth': 'auth',
  });
};


UserSchema.statics.checkCredentials = function ({ email, password }) {
  return this.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject();
      }

      return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (error, isSamePassword) => {
          if (isSamePassword) {
            resolve(user);
          } else {
            reject();
          }
        });
      });
    });
};


UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    // hash password
    bcrypt.genSalt(13, (errorGenSalt, salt) => {
      bcrypt.hash(this.password, salt, (errorHash, hash) => {
        this.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
