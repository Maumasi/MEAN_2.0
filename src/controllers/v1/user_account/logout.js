
module.exports = (User) => {
  return (req, res) => {
    req.user.deleteToken(req.token)
      .then(() => {
        res.json({
          success: 'User logged out and session token deleted',
        });
      });
  };
};
