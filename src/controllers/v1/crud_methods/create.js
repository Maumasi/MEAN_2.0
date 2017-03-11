
module.exports = (Model, instance = 'model') => {
  return (req, res) => {
    const props = req.body;
    const modelInstance = Model.create(props);

    // create token if the instance model is a 'user'
    if (instance === 'user') {
      modelInstance.then((user) => {
        user.createToken();
        return user;
      })
      .then((user) => {
        res.header('x-auth', user.tokens[0].token).send(user);
      });
    // create token if the instance model is a 'task'
    } else {
      modelInstance.then((data) => {
        res.json(data);
      });
    }
    // fail
    modelInstance.catch(() => {
      // if this is a User being saved and failed
      if (instance === 'user') {
        res.json({
          fail: 'User not saved',
        });
      } else {
        res.json({
          fail: 'Task not saved',
        });
      }// if
    });
  };
};
