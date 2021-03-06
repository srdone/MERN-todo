import React from 'react';
import moment from 'moment';

var TodoActions = require('../actions/TodoActions');

export default class AddTodo extends React.Component {

  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    var newTodoTitleNode = React.findDOMNode(this.refs.newTodoTitle);
    var newTodoDueDateNode = React.findDOMNode(this.refs.newTodoDueDate);

    var newTodo = {
      title: newTodoTitleNode.value.trim(),
      dueDate: moment(newTodoDueDateNode.value).startOf('day').toDate()
    };

    TodoActions.create(newTodo);
    newTodoTitleNode.value = '';
    newTodoDueDateNode.value = '';

  };

  render() {
    return (
      <form className="form-inline">
        <h4>Add New Todo</h4>

        <div className="form-group">
          <label htmlFor="newTodoTitle">Title</label>{' '}
          <input type="text" className="form-control" id="newTodoTitle" ref="newTodoTitle" />
        </div>
        {' '}
        <div className="form-group">
          <label htmlFor="newTodoTitle">Due Date</label>{' '}
          <input type="date" className="form-control" id="newTodoDueDate" ref="newTodoDueDate" />
        </div>
        {' '}
        <button className="btn btn-primary" onClick={this._handleSubmit}>Add New Todo</button>

      </form>
    )
  }

};

AddTodo.propTypes = {

};