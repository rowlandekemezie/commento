const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  author: {type: String},
  message: {type: String},
});

module.exports = mongoose.model('Comments', commentSchema);