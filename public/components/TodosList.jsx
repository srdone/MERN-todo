import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import TableHeader from '../layout-components/TableHeader';
import Table from '../layout-components/Table';
import { getTodos } from '../actions/todoCRUD';
import { sortTodos } from '../utilities/todoUtils';

export default class TodosList extends React.Component {

  constructor() {
    super();
    this.state = {todos: []};
    this._handleNewTodo = this._handleNewTodo.bind(this);
  }

  componentDidMount() {
    getTodos((todos) => this.setState({todos: todos}));
  }

  _handleNewTodo(newTodo) {
    var todos = this.state.todos;
    todos.unshift(newTodo);
    this.setState({todos: todos});
  }

  render() {

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