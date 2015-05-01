import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export default class TodosList extends React.Component {

  constructor() {
    super();
    this.state = {todos: []}
    this._handleNewTodo = this._handleNewTodo.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8082' + '/todos',
      dataType: 'json',
      crossDomain: true,
      success: (todos) => this.setState({todos: todos}),
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    });
  }

  _handleNewTodo(newTodo) {
    var todos = this.state.todos;
    todos.unshift(newTodo);
    this.setState({todos: todos});
  }

  render() {

    var todos = this.state.todos.map((todo) => {
      return <TodoItem todo={todo} className="row" key={todo._id} />
    });

    return (
      <div className="container-fluid">
        <AddTodo todoAdded={this._handleNewTodo}/>
        <hr />
        <div className="h3">Get These Things Done</div>
        {todos}
      </div>
    )
  }
  
}