import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import TableHeader from '../layout-components/TableHeader';
import Table from '../layout-components/Table';
import { sortTodos } from '../utilities/todoUtils';

var TodoStore = require('../stores/TodoStore');
var TodoActions = require('../actions/TodoActions');

export default class TodosList extends React.Component {

  constructor() {
    super();
    this.state = {todos: []};
    this._handleNewTodo = this._handleNewTodo.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({todos: TodoStore.getAll()});
  }

  componentWillMount() {
    TodoStore.addChangeListener(this._onChange);
  }

  componentDidMount() {
    this.setState({todos: TodoStore.getAll()});
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }

  _handleNewTodo(newTodo) {
    TodoActions.create(newTodo);
  }

  render() {

    //TODO: add a delete button
    var tableHeaderTitles = ['Complete', 'Title', 'Due Date', 'Actions'];

    var caption= 'Get These Things Done';

    var sortedTodos = sortTodos(this.state.todos);

    var todoItems = sortedTodos.map((todo) => {
      return <TodoItem todo={todo} className="row" key={todo._id} />
    });

    return (
      <div className="container-fluid">
        <AddTodo todoAdded={this._handleNewTodo}/>
        <hr />
        <Table caption={caption} headers={tableHeaderTitles}>
          {todoItems}
        </Table>
      </div>
    )
  }
  
}

TodosList.propTypes = {

};