import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { getTodos } from '../actions/rest';

export default class TodosList extends React.Component {

  constructor() {
    super();
    this.state = {todos: []}
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

    var header = (() => {
      if (this.state.todos.length !== 0) {
        return <div className="h3">Get These Things Done</div>
      }
    })();

    var todos = this.state.todos.map((todo) => {
      return <TodoItem todo={todo} className="row" key={todo._id} />
    });

    return (
      <div className="container-fluid">
        <AddTodo todoAdded={this._handleNewTodo}/>
        <hr />
        {header}
        {todos}
      </div>
    )
  }
  
}

TodosList.propTypes = {

};