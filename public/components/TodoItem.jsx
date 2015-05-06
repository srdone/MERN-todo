import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import {Link} from 'react-router';
import TableRow from '../layout-components/TableRow';
import Button from '../layout-components/Button';

var TodoActions = require('../actions/TodoActions');

export default class TodoItem extends React.Component {

  constructor() {
    super();
    this.state = {todo: {}};

    this._handleEdit = this._handleEdit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleEdit() {
    var { router } = this.context;
    router.transitionTo('edit', {todoId: this.props.todo._id});
  }

  _handleChange(e) {
    var updatedTodo = $.extend({}, this.props.todo);
    updatedTodo.completed = e.target.checked;

    TodoActions.update(updatedTodo);
  }

  render() {

    var { completed } = this.props.todo;

    var dueDate = moment(this.props.todo.dueDate).format('M/D/YYYY');

    var status = function (date) {
      if (completed !== true && moment(Date.now()).isAfter(date, 'day')) {
        return 'danger';
      } else if (completed !== true && moment(date).isSame(Date.now(), 'day')) {
        return 'warning';
      }
    }.bind(this);

    var dueText = (() => {
      if (this.props.todo.completed) {
        return <span>Complete!</span>
      } else {
        return <span>{dueDate}</span>;
      }
    })();

    var strikethroughWhenComplete = function (text) {
      if (this.props.todo.completed) {
        return <del>{text}</del>
      } else {
        return <span>{text}</span>
      }
    }.bind(this);

    //TODO: Make resort happen when complete box is checked - once Flux is implemented, this will be easier
    //TODO: Make checkbox pretty
    //TODO: Increase text sizing
    var rowItems = [
      <input type="checkbox" checked={this.props.todo.completed} onChange={this._handleChange}/>,
      strikethroughWhenComplete(this.props.todo.title),
      dueText,
      <Button onClick={this._handleEdit}>Edit</Button>
    ];

    return (
      <TableRow status={status(this.props.todo.dueDate)} >
        {rowItems.map((item, i) => {
          return <span key={i}>{item}</span>
        })}
      </TableRow>
    )
  }

}

TodoItem.contextTypes = {
  router: React.PropTypes.func
};

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired
};