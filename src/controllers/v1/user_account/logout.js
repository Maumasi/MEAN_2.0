
module.exports = (User) => {
  return (req, res) => {
    req.user.deleteToken(req.token)
      .then(() => {
        res.json({
          success: 'sessoin token deleted',
        });
      });
  };
};
