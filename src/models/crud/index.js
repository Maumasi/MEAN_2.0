// const db = require('./db');

const collection = {
  task: require('./collections/task'),
  user: require('./collections/user'),
};

// export to preform record tasks

exports.collection = (record) => {
  return {
    // create
    add: require('./crud/create_task')(collection[record]),
    // read
    find: require('./crud/read_task')(collection[record]),
    // update
    update: require('./crud/update_task')(collection[record]),
    // delete
    remove: require('./crud/delete_task')(collection[record]),
  };
};
