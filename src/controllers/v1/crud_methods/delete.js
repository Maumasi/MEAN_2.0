
module.exports = (Model) => {
  return (req, res) => {
    const { id } = req.params;
    Model.findByIdAndRemove({ _id: id })
      // success
      .then((task) => {
        res.status(204).json(task);
      })
      // fail
      .catch(() => res.json({ fail: 'Failed to delete task' }));
  };
};
