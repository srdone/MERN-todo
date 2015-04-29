var todos = require('../controllers/todos.server.controller');

module.exports = function (app) {
  app.route('/todos')
    .get(todos.getAllTodos)
    .post(todos.createTodo);

  app.route('/todos/:todoId')
    .get(todos.readTodo)
    .put(todos.updateTodo)
    .delete(todos.deleteTodo);

  app.param('todoId', todos.todoById);
};