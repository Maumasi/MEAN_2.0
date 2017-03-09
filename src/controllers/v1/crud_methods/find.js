
module.exports = (Model) => {
  return {
    byId(req, res) {
      const { id } = req.params;

      Model.findById({ _id: id })
        // success
        .then(task => res.json(task))
        // fail
        .catch(() => res.json({ fail: 'Failed to find task' }));
    },

    all(req, res) {
      Model.find({})
        // success
        .then(tasks => res.json(tasks))
        // fail
        .catch(() => res.json({ fail: 'Failed to tasks tasks' }));
    },
  };
};
