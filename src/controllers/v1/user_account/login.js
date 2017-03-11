
module.exports = (User) => {
  return (req, res) => {
    User.checkCredentials(req.body)
      .then((user) => {
        res.json(user);
      })
      // failed credentials check
      .catch(() => {
        res.json({
          fail: 'User failed to login this credentials',
        });
      });
  };
};
