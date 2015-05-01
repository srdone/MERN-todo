import { REST_ENDPOINT } from '../constants/ajax';

function saveTodo (todo, success, error) {

  $.ajax({
    url: REST_ENDPOINT + '/todos',
    type: 'POST',
    dataType: 'json',
    crossDomain: true,
    data: todo,
    success: success,
    error: error
  });

}

module.exports = {
  saveTodo: saveTodo
};