const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'USER',
  },
  title: {
    type: String,
    required: 'true',
  },
  body: {
    type: String,
    required: 'true',
  },

  Date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('TODO', TodoSchema);
