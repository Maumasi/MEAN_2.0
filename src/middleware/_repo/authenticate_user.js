const User = require('../../models/collections/user');

module.exports = (req, res, next) => {
  const token = req.header('x-auth');
  User.findByToken(token)
    .then((user) => {
      if (!user) {
        return Promise.reject();
      }

      req.user = user;
      req.token = token;
      next();
    })

    .catch(() => {
      res.json({
        fail: 'Could not find user or user was not authenticated',
      });
    });
};
