// model
// const Task = require('../../../models/collections/task');
// const User = require('../../../models/collections/user');
const models = {
  task: require('../../models/collections/task'),
  user: require('../../models/collections/user'),
};

// route logic
module.exports = (model) => {
  return {
    create: require('./v1/add_task')(models[model]),
    update: require('./v1/update_task')(models[model]),
    delete: require('./v1/delete_task')(models[model]),
    find: require('./v1/find')(models[model]),
  };
};
