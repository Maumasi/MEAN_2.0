
module.exports = (Model, instance = 'model') => {
  return (req, res) => {
    const { id } = req.params;
    let options;
    if (instance === 'task') {
      options = { _id: id, _owner: req.user._id };
    } else {
      options = { _id: id, 'tokens.token': req.token };
    }
    console.log(instance);
    Model.findOneAndRemove(options)
      // success
      .then((task) => {
        res.status(204).json(task);
      })
      // fail
      .catch(() => res.json({ fail: 'Failed to delete task' }));
  };
};
