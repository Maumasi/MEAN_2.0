const assert = require('assert');
const User = require('../src/models/collections/user');

describe('Create a User record', () => {
  it('Save a User to MongoDB', (done) => {
    const joe = new User({ name: 'Joe' });

    joe.save()
      .then(() => {
        // user was created
        assert(!joe.isNew);
        done();
      })
      .catch(() => {
        // user failed to persist
        assert(joe.isNew);
        done();
      });
  });
});
