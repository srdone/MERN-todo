//Based on https://github.com/facebook/flux/blob/master/examples/flux-todomvc/

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TODO_CONSTANTS = require('../constants/TODO_CONSTANTS');
var todoCRUD = require('../utilities/todoCRUD');
var _ = require('lodash');

var { getTodos, createTodo, updateTodo, deleteTodo } = todoCRUD;

var CHANGE_EVENT = 'change';
var _todos = {};
var isInitialized = false;

function create(todoToCreate, success) {
  //TODO: add error handling
  createTodo(todoToCreate, (createdTodo) => {
    _todos[createdTodo._id] = createdTodo;
    success();
  })
}

function update(todoToUpdate, success) {
  //TODO: add error handling
  updateTodo(todoToUpdate, (updatedTodo) => {
    _todos[updatedTodo._id] = updatedTodo;
    success();
  })
}

function destroy(todoToDelete, success) {
  //TODO: add error handling
  deleteTodo(todoToDelete._id, () => {
    delete _todos[todoToDelete._id];
    success();
  })
}

function initializeTodos() {
  //TODO: Add error handling
  getTodos((todos) => {
    todos.forEach((todo) => {
      _todos[todo._id] = todo;
    });
    isInitialized = true;
    Store.emitChange();
  })
}

class TodoStore extends EventEmitter {

  constructor() {
    super();
    this.emitChange = this.emitChange.bind(this);
  }

  getAll() {
    if(isInitialized) {
      return _.toArray(_todos);
    } else {
      initializeTodos();
      return _.toArray(_todos);
    }
  }

  getById(id) {
    if(isInitialized) {
      return _todos[id];
    } else {
      initializeTodos();
      return _todos[id];
    }
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

var Store = new TodoStore();

AppDispatcher.register((action) => {

  switch(action.actionType) {

    case TODO_CONSTANTS.TODO_CREATE:
      create(action.todo, Store.emitChange);
      break;

    case TODO_CONSTANTS.TODO_UPDATE:
      update(action.todo, Store.emitChange);
      break;

    case TODO_CONSTANTS.TODO_DESTROY:
      destroy(action.todo, Store.emitChange);
      break;

    default:
      //no action

  }

});



module.exports = Store;