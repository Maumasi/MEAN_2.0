const mongoose = require('mongoose');

// connect to the database 'users_test'
mongoose.connect('mongodb://localhost/users_test');

// handle success and error events
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB'))
  .on('error', (error) => {
    console.warn('Not connected to MongoDB');
    console.warn(`Warning: ${error}`);
  });
