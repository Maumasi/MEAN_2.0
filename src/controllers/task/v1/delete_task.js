// // model
// const Task = require('../../../models/collections/task');
//
// module.exports = (req, res) => {
//   const { id } = req.params;
//   Task.findByIdAndRemove({ _id: id })
//     // success
//     .then((task) => {
//       res.status(204).json(task);
//     })
//     // fail
//     .catch(() => res.json({ fail: 'Failed to delete task' }));
// };


module.exports = (Model) => {
  return (req, res) => {
    const { id } = req.params;
    Model.findByIdAndRemove({ _id: id })
      // success
      .then((task) => {
        res.status(204).json(task);
      })
      // fail
      .catch(() => res.json({ fail: 'Failed to delete task' }));
  };
};
