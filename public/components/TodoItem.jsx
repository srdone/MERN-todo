import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import {Link} from 'react-router';
import { updateTodo } from '../actions/TodoActions';
import TableRow from '../layout-components/TableRow';

export default class TodoItem extends React.Component {

  constructor() {
    super();
    this.state = {todo: {}};

    this._handleEdit = this._handleEdit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({todo: this.props.todo});
  }

  _handleEdit() {
    var { router } = this.context;
    router.transitionTo('edit', {todoId: this.props.todo._id});
  }

  _handleChange(e) {
    var updatedTodo = $.extend({}, this.state.todo);
    updatedTodo.completed = e.target.checked;

    updateTodo(updatedTodo, (todo) => this.setState({todo: todo}));
  }

  render() {

    var dueDate = moment(this.state.todo.dueDate).format('M/D/YYYY');

    var dueText = (() => {
      if (this.state.todo.completed) {
        return <span>Complete!</span>
      } else {
        return <span>{dueDate}</span>;
      }
    })();

    var strikethroughWhenComplete = function (text) {
      if (this.state.todo.completed) {
        return <del>{text}</del>
      } else {
        return <span>{text}</span>
      }
    }.bind(this);

    var rowItems = [
      <input type="checkbox" checked={this.state.todo.completed} onChange={this._handleChange}/>,
      strikethroughWhenComplete(this.props.todo.title),
      dueText,
      <button className="btn btn-primary" onClick={this._handleEdit}>Edit</button>
    ];

    return (
      <TableRow>
        {rowItems}
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