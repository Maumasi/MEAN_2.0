// model
const Task = require('../../../models/collections/user');

module.exports = (req, res) => {
  const userProps = req.body;
  Task.create(userProps)
    // success
    .then((userData) => {
      res.json(userData);
    })
    // fail
    .catch(
      () => {
        res.json({
          fail: 'user not saved',
        });
      }
    );
};
