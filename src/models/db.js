const mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;
// connect to the database 'users_test'
mongoose.connect('mongodb://localhost/users_test');
