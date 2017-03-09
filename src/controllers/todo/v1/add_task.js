// model
const Task = require('../../../models/collections/task');

module.exports = (req, res) => {
  const props = req.body;

  const { description } = props;

  let modelType;
  if(description) {
    modelType = Task;
  }

  modelType.create(props)
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
