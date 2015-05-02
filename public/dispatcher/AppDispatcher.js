//Adapted to es6 from Facebook's TODOMVC at https://facebook.github.io/flux/docs/todo-list.html#content

export default class AppDispatcher extends Dispatcher {

  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }

}