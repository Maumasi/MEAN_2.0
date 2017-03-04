// model
const Task = require('../../../models/collections/task');

module.exports = {
  byId(req, res) {
    const { id } = req.params;

    Task.findById({ _id: id })
      // success
      .then(task => res.json(task))
      // fail
      .catch(() => res.json({ fail: 'Failed to find task' }));
  },

  all(req, res) {
    Task.find({})
      // success
      .then(tasks => res.json(tasks))
      // fail
      .catch(() => res.json({ fail: 'Failed to tasks tasks' }));
  },
};
