var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

mongoose.model('Todo', TodoSchema);