// model
const Task = require('../../../models/collections/task');

module.exports = (req, res) => {
  const { id } = req.params;
  const todoProps = req.body;

  Task.findByIdAndUpdate({ _id: id }, todoProps)
    .then(() => {
      Task.findById({ _id: id })
        .then(task => res.json(task));
    })
    .catch(() => res.json({ fail: 'Failed to update task' }));
};
