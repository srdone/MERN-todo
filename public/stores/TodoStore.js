//Adapted to es6 from Facebook's TODOMVC at https://facebook.github.io/flux/docs/todo-list.html#content

import AppDispatcher from '../dispatcher/Dispatcher';
import TodoConstants from '../constants/TodoConstants';
import TodoActions from '../actions/TodoActions';
import { EventEmitter } from 'events';

var CHANGE_EVENT = 'change';

// keeping this list private in the module
var _todos = {};

function create(todo, success, failure) {
  TodoActions.createTodo(
    todo,
    (todo) => {
      _todos[todo._id] = todo;
      if (success) {
        success();
      }
    },
    () => {
      if (failure) {
        failure()
      }
    }
  )
}

function read(todoId) {
  return _todos[todoId];
}

//TODO: figure out how to provide pre-server response update with this pattern
function update(todo, success, failure) {
  TodoActions.updateTodo(
    todo,
    (todo) => {
      _todos[todoId] = todo;
      if (success) {
        success();
      }
    },
    () => {
      if (failure) {
        failure();
      }
    }
  )
}

function destroy(todoId, success, failure) {
  TodoActions.deleteTodo()
}

class TodoStore extends EventEmitter {

  constructor() {
    super();

    this.dispatcherIndex = AppDispatcher.register((payload) => {
      var action = payload.action;
      var todo;

      switch(action.actionType) {
        case TodoConstants.TODO_CREATE:
          todo = action.todo;
          create(todo);
          this.emitChange();
          break;

        case TodoConstants.TODO_DESTROY:
          destroy(action._id);
          this.emitChange();
          break;

        case TodoConstants.TODO_READ:
          read(action._id);
          break;

        case TodoConstants.TODO_UPDATE:
          update(action._todo);
          this.emitChange();
          break;

      }

      return true;
    })
  }

  static getAll() {
    return _todos;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}