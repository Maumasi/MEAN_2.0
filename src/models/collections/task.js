
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  description: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  isFinished: {
    type: Boolean,
    default: false,
  },
  finishedAt: {
    type: String,
    default: null,
  },
});

const Task = mongoose.model('task', TaskSchema);

module.exports = Task;
