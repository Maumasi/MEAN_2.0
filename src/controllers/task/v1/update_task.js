// model
// const Task = require('../../../models/collections/task');

// module.exports = (req, res) => {
//   const { id } = req.params;
//   const todoProps = req.body;
//
//   Task.findByIdAndUpdate({ _id: id }, todoProps)
//     .then(() => {
//       Task.findById({ _id: id })
//         // success
//         .then(task => res.json(task));
//     })
//     // fail
//     .catch(() => res.json({ fail: 'Failed to update task' }));
// };


module.exports = (Model) => {
  return (req, res) => {
    const { id } = req.params;
    const todoProps = req.body;

    Model.findByIdAndUpdate({ _id: id }, todoProps)
      .then(() => {
        Model.findById({ _id: id })
          // success
          .then(task => res.json(task));
      })
      // fail
      .catch(() => res.json({ fail: 'Failed to update task' }));
  };
};
