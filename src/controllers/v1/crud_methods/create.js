
module.exports = (Model, instance = 'model') => {
  return (req, res) => {
    const props = req.body;

    // if model is a 'Task' add an `_owner` prop to obj being saved
    if (instance === 'task') {
      props._owner = req.user._id;
    }
    const modelInstance = Model.create(props);

    // create token if the instance model is a 'user'
    if (instance === 'user') {
      modelInstance.then((user) => {
        user.createToken();
        return user;
      })
      .then((user) => {
        res.header('x-auth', user.tokens[0].token).json(user);
      });
    // create token if the instance model is a 'task'
    } else {
      modelInstance.then((data) => {
        res.header('x-auth', req.user.tokens[0].token).json(data);
      });
    }
    // fail
    modelInstance.catch(() => res.json({ fail: `Failed to create ${instance}` }));
  };
};
