
module.exports = (Model) => {
  return (req, res) => {
    const props = req.body;

    Model.create(props)
      // success
      .then((data) => {
        res.json(data);
      })
      // fail
      .catch(
        () => {
          // if this is a Task being saved and failed
          if (props.description) {
            res.json({
              fail: 'Task not saved',
            });
          } else {
            // if this is a User being saved and failed
            res.json({
              fail: 'User not saved',
            });
          }
        }
      );
  };
};
