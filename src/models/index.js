const db = require('./db');

const collection = {
  task: require('./collections/task'),
  user: require('./collections/user'),
};

// create
exports.add = (record) => {
  return require('./crud/create_task')(collection[record]);
};

// read
exports.find = (record) => {
  return require('./crud/create_task')(collection[record]);
};

// update
exports.update = (record) => {
  return require('./crud/create_task')(collection[record]);
};

// delete
exports.remove = (record) => {
  return require('./crud/create_task')(collection[record]);
};
