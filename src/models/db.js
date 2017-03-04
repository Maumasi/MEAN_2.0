const mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;
// connect to the database 'users_test'
if(process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/todo_test');
} else {
  mongoose.connect('mongodb://localhost/todo');
}
