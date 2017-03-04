// model
const Task = require('../../../models/collections/task');

module.exports = (req, res) => {
  const todoProps = req.body;
  Task.create(todoProps)
    // success
    .then((taskData) => {
      res.json(taskData);
    })
    // fail
    .catch(
      () => {
        res.json({
          fail: 'Task not saved',
        });
      }
    );
};
