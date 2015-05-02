//Adapted to es6 from Facebook's TODOMVC at https://facebook.github.io/flux/docs/todo-list.html#content

import AppDispatcher from '../dispatcher/Dispatcher';
import { EventEmitter } from 'events';

var CHANGE_EVENT = 'change';

// keeping this list private in the module
var _todos = {};

function create(todo) {
  //add the todo and save it to the database
}

function read(todoId) {
  //return the todo
}

function update(todo) {
  //update the todo and save it to the database
}

function destroy(todoId) {
  // delete the todo from the list and from the database
}

class TodoStore {

  constructor() {
    this.dispatcherIndex = AppDispatcher.register((payload) => {
      var action = payload.action;
      var todo;

      switch(action.actionType) {
        case TodoConstants.TODO_CREATE:
          todo = action.todo;
          create(todo);
          break;

        case TodoConstants.TODO_DESTROY:
          destroy(action._id);
          TodoStore.emitChange();
          break;

        case TodoConstants.TODO_READ:
          read(action._id);
          break;

        case TodoConstants.TODO_UPDATE:
          update(action._todo);
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

  addChangeListener() {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}