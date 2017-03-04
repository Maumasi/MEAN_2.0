// const db = require('./db');

const collection = {
  task: require('../collections/task'),
  user: require('../collections/user'),
};

// export to preform record tasks

exports.collection = (record) => {
  return {
    // create
    add: require('./create_task')(collection[record]),
    // read
    find: require('./read_task')(collection[record]),
    // update
    update: require('./update_task')(collection[record]),
    // delete
    remove: require('./delete_task')(collection[record]),
  };
};
