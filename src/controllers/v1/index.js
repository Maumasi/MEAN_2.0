const { authenticateUser } = require('../middleware/index.js');

const models = {
  task: require('../../models/collections/task'),
  user: require('../../models/collections/user'),
};

// route logic
module.exports = (model) => {
  return {
    create: require('./crud_methods/create')(models[model], model),
    update: require('./crud_methods/update')(models[model]),
    delete: require('./crud_methods/delete')(models[model]),
    find: require('./crud_methods/find')(models[model]),
  };
};
