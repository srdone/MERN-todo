import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: []}
  }

  componentDidMount() {
    $.ajax({
      url: this.props.url + '/todos',
      dataType: 'json',
      crossDomain: true,
      success: (todos) => this.setState({todos: todos}),
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    })
  }

  render() {
    return <div>
      <TodoForm url={this.props.url}/>
      <TodoList todos={this.state.todos}/>
    </div>
  }

}

