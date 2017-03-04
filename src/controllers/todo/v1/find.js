// model
const Task = require('../../../models/collections/task');

module.exports = {
  byId(req, res) {
    const { id } = req.params;

    Task.findById({ _id: id })
      .then(task => res.json(task))
      .catch(() => res.json({ fail: 'Failed to find task' }));
  },
  all(req, res) {
    Task.find({})
      .then(tasks => res.json(tasks))
      .catch(() => res.json({ fail: 'Failed to tasks task' }));
  },
};
