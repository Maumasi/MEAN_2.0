
module.exports = (User) => {
  return (req, res) => {
    User.checkCredentials(req.body)
      .then((user) => {
        return user.createToken()
          .then((token) => {
            res.header('x-auth', token).json(user);
          });
      })
      // failed credentials check
      .catch(() => {
        res.json({
          fail: 'User failed to login with credentials',
        });
      });
  };
};
