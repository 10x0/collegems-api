const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
  },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
});

module.exports = mongoose.model('Module', moduleSchema);
