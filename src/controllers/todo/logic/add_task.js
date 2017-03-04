// model
const Task = require('../../../models/collections/task');

module.exports = (req, res) => {
  // destructure request body object
  const { description } = req.body;
  // create a new task from request
  const task = new Task({ description });
  task.save()
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
