var rewire = require('rewire');
var rewireModule = require('./rewireModule');

var SERVER_CONSTANTS = require('../constants/servers');
var TodoActions = rewire('../actions/TodoActions');

var $SuccessMock = {

  ajax: function (options) {
    options.success(options);
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

    var result, data;

    rewireModule(TodoActions, {
      $: $SuccessMock
    });

    beforeEach(() => {
      data = 'the data';
      var success = (data) => result = data;

      TodoActions.createTodo(data, success);
    });

    it('should execute the passed in success function on success, and pass the data given as a parameter', () => {
      expect(result.data).toBe(data);
    });

    it('should have options.method equal to "POST"', () => {
      expect(result.method).toBe('POST');
    });

    it('should have options.url equal to REST_ENDPOINT + /todos', () => {
      //TODO: figure out how to provide a fake url - for now just testing the actual
      expect(result.url).toBe(SERVER_CONSTANTS.REST_ENDPOINT + '/todos');
    });

    it('should have options.crossDomain set to true', () => {
      expect(result.crossDomain).toBe(true);
    });

    it('should have options.dataType set to json', () => {
      expect(result.dataType).toBe('json');
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