// model
const Task = require('../../../models/collections/task');

module.exports = (req, res) => {
  // destructure request body object
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
