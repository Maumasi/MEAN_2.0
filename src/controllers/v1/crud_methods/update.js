
module.exports = (Model, instance = 'model') => {
  return (req, res) => {
    const { id } = req.params;
    const todoProps = req.body;

    Model.findByIdAndUpdate({ _id: id }, todoProps)
      .then(() => {
        Model.findById({ _id: id })
          // success
          .then(task => res.json(task));
      })
      // fail
      .catch(() => res.json({ fail: 'Failed to update task' }));
  };
};
