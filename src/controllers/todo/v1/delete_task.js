// model
const Task = require('../../../models/collections/task');

module.exports = (req, res) => {
  const { id } = req.params;

  Task.findByIdAndRemove({ _id: id })
    .then((task) => res.status(204).json(task))
    .catch(() => res.json({ fail: 'Failed to update task' }));
};
