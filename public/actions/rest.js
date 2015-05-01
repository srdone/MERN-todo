import { REST_ENDPOINT } from '../constants/ajax';

function createTodo (todo, success, error) {

  var url = REST_ENDPOINT + '/todos';

  $.ajax({
    url: url,
    type: 'POST',
    dataType: 'json',
    crossDomain: true,
    data: todo,
    success: success,
    error: (xhr, status, err) => {
      console.error(REST_ENDPOINT, status, err.toString());
      if (error) {
        error(err);
      }
    }
  });

}

function getTodoById (id, success, error) {
  $.ajax({
    url: REST_ENDPOINT + '/todos/' + id,
    dataType: 'json',
    crossDomain: true,
    success: success,
    error: (xhr, status, err) => {
      console.error(REST_ENDPOINT, status, err.toString());
      if (error) {
        error(err);
      }
    }
  })
}

function updateTodo (todo, success, error) {
  $.ajax({
    url: REST_ENDPOINT + '/todos/' + todo._id,
    dataType: 'json',
    method: "PUT",
    data: todo,
    crossDomain: true,
    success: success,
    error: (xhr, status, err) => {
      console.error(REST_ENDPOINT, status, err.toString());
      if (error) {
        error(err);
      }
    }
  })
}

function deleteTodo (id, success, error) {
  $.ajax({
    url: REST_ENDPOINT + '/todos/' + id,
    method: "DELETE",
    crossDomain: true,
    success: success,
    error: (xhr, status, err) => {
      console.error(REST_ENDPOINT, status, err.toString());
      if (error) {
        error(err);
      }
    }
  })
}

module.exports = {
  createTodo: createTodo,
  getTodoById: getTodoById,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo
};