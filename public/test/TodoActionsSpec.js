var rewire = require('rewire');
var rewireModule = require('./rewireModule');

var TodoActions = rewire('../actions/TodoActions');

var $SuccessMock = {

  ajax: function (options) {
    if (options.method === 'PUT' || options.method === 'POST') {
      options.success(options.data);
    } else if (options.method === 'DELETE') {
      options.success(options.url);
    }
  }

};

var $ErrorMock = function (errorMessage) {
  return({
    ajax: function (options) {
      options.error('xhr', 'status', errorMessage);
    }
  });
};

describe('TodoActions', () => {

  it('should have a createTodo() function', () => {
    expect(TodoActions.createTodo).toBeDefined();
  });

  describe('createTodo() success', () => {

    rewireModule(TodoActions, {
      $: $SuccessMock
    });

    it('should execute the passed in success function on success, and pass the data given as a parameter', () => {

      var data = 'the data';
      var result;
      var success = (data) => result = data;

      TodoActions.createTodo(data, success);

      expect(result).toBe(data);
    });

  });

  describe('createTodo() error', () => {

    rewireModule(TodoActions, {
      $: $ErrorMock('error')
    });

    it('should execute the passed in error function, and pass the error message as a parameter', () => {

      var data = 'the data';
      var result;
      var error = (errorMsg) => result = errorMsg;

      TodoActions.createTodo(data, undefined, error);

      expect(result).toBe('error');
    });

  });

  //TODO: add tests for correct urls, etc. Also tests for all the other action methods.

});