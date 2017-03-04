const mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;
// connect to the database 'users_test'
mongoose.connect('mongodb://localhost/users_test');

// connect to the database before mocha runs
before((done) => {
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Not connected to MongoDB');
      console.warn(`Warning: ${error}`);
    });
});

// run before each test is run
beforeEach((done) => {
  // drop every recor in the 'users' collection
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
