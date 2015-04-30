import TodoItem from './TodoItem';

export default class TodosList extends React.Component {

  constructor() {
    super();
    this.state = {todos: []}
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8082' + '/todos',
      dataType: 'json',
      crossDomain: true,
      success: (todos) => this.setState({todos: todos}),
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    })
  }

  render() {

    var todos = this.state.todos.map((todo) => {
      return <TodoItem todo={todo} className="row"/>
    });

    return (
      <div className="container-fluid">
        <div className="h3">Get These Things Done</div>
        {todos}
      </div>
    )
  }
  
}