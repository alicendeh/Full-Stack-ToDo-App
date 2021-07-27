const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: 'true',
  },
  email: {
    type: String,
    required: 'true',
  },
  password: {
    type: String,
    required: 'true',
  },
  Date: {
    type: Date,

    default: Date.now(),
  },
});

module.exports = mongoose.model('USER', UserSchema);
