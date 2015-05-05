//Adapted to es6 from Facebook's TODOMVC at https://facebook.github.io/flux/docs/todo-list.html#content
//TODO: implement dispatcher
export default class Dispatcher {

  constructor() {
    this._promises = [];
    this._callbacks = [];
  }

  register(callback) {
    this._callbacks.push(callback);
    return _callbacks.length - 1;
  }

  dispatch(payload) {
    var resolves = [];
    var rejects = [];

    this._promises = this._callbacks.map((_, i) => {
      return new Promise((resolve, reject) => {
        resolves[i] = resolve;
        rejects[i] = reject;
      });
    });

    this._callbacks.forEach((callback, i) => {
      Promise.resolve(callback(payload)).then(
        () => resolves[i](payload),
        () => rejects[i](new Error('Dispatcher callback unsuccessful'))
      )
    });

    this._promises = [];
  }

}