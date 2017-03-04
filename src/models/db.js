const mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;
// connect to the dev database
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(`${process.env.DB_SCHEMA}://${process.env.DB_HOST}/${process.env.DB_NAME}`);
} else {
  // connect to the database for unit testing
  mongoose.connect(`${process.env.DB_SCHEMA}://${process.env.DB_HOST}/${process.env.DB_TEST_NAME}`);
}
