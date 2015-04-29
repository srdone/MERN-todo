var Todo = require('mongoose').model('Todo');

exports.todoById = function (req, res, next, id) {
  Todo.findById(id).exec(function (err, todo) {
    if (err) {
      return next(err);
    }
    if (!todo) {
      return next(new Error('Failed to load todo ' + id));
    }
    req.todo = todo;
    next();
  });
};

exports.getAllTodos = function (req, res, next) {
  Todo.find({}).exec(function (err, todos) {
    if (err) {
      return next(err);
    }
    res.json(todos);
  });
};

exports.readTodo = function (req, res) {
  res.json(req.todo);
};

exports.createTodo = function (req, res, next) {
  var newTodo = new Todo(req.body);

  newTodo.save(function (err) {
    if (err) {
      return next(err);
    }
    res.json(newTodo);
  });
};

exports.updateTodo = function (req, res) {
  var todo = req.todo;

  todo.title = req.body.title;
  todo.dueDate = req.body.dueDate; // do we need to convert this to a date?
  todo.completed = req.body.completed;

  todo.save(function (err) {
    if (err) {
      return res.status(400).send({message: 'an error occurred'});
    }
    res.json(todo);
  });
};

exports.deleteTodo = function (req, res) {
  var todo = req.todo;

  todo.remove(function (err) {
    if (err) {
      return res.status(400).send({message: 'an error occurred'});
    }
    res.json(todo);
  })
};