import moment from 'moment';

function orderByCompleted (a, b) {
  if (a.completed) {
    return 1;
  } else {
    return -1;
  }
}

function orderByDueDate (a, b) {
  var aDueMoment = moment(a.dueDate);
  var bDueMoment = moment(b.dueDate);
  if (aDueMoment.isBefore(bDueMoment, 'day')) {
    return -1;
  } else if (aDueMoment.isSame(bDueMoment, 'day')) {
    return 0;
  } else if (aDueMoment.isAfter(bDueMoment, 'day')) {
    return 1;
  }
}

function sort(todoArray) {
  var completedTodos = todoArray.filter((todo) => todo.completed);
  var remainingTodos = todoArray.filter((todo) => !todo.completed);

  completedTodos.sort(orderByDueDate);
  remainingTodos.sort(orderByDueDate);

  return remainingTodos.concat(completedTodos);
}

module.exports = {
  sortTodos: sort
};