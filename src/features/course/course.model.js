const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
});

module.exports = mongoose.model('Course', courseSchema);
