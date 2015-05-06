//Based on https://github.com/facebook/flux/blob/master/examples/flux-todomvc/

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TODO_CONSTANTS = require('../constants/TODO_CONSTANTS');

function create(todo) {
  console.log('Create action', todo);
    AppDispatcher.dispatch({
      actionType: TODO_CONSTANTS.TODO_CREATE,
      todo: todo
    });
  }

function update(todo) {
  console.log('Update action', todo);
    AppDispatcher.dispatch({
      actionType: TODO_CONSTANTS.TODO_UPDATE,
      todo: todo
    })
  }

function destroy(todo) {
  console.log('Destroy action', todo);
    AppDispatcher.dispatch({
      actionType: TODO_CONSTANTS.TODO_DESTROY,
      todo: todo
    })
  }

module.exports = {
  create: create,
  update: update,
  destroy: destroy
};