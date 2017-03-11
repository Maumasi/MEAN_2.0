
module.exports = (Model, instance = 'model') => {
  return (req, res) => {
    const { id } = req.params;

    let options;
    if (instance === 'task') {
      options = { _id: id, _owner: req.user._id };
    } else {
      options = { _id: id, 'tokens.token': req.token };
    }
    const props = req.body;

    Model.findByIdAndUpdate(options, props)
      .then(() => {
        Model.findById({ _id: id })
          // success
          .then(task => res.json(task));
      })
      // fail
      .catch(() => res.json({ fail: 'Failed to update task' }));
  };
};
