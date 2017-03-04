
const mongoose = require('mongoose');

const Task = mongoose.model('tasks', {
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
    type: Number,
    default: null,
  },
});

module.exports = Task;
