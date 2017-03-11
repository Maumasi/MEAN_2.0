const models = {
  task: require('../../models/collections/task'),
  user: require('../../models/collections/user'),
};

// route logic
module.exports = (model) => {
  return {
    // shared controller functions
    create: require('./crud_methods/create')(models[model], model),
    update: require('./crud_methods/update')(models[model]),
    delete: require('./crud_methods/delete')(models[model]),
    find: require('./crud_methods/find')(models[model]),

    // user specific controller functions
    login: require('./user_account/login')(models[model]),
    logout: require('./user_account/logout')(models[model]),
  };
};
