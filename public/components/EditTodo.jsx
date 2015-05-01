export default class EditTodo extends React.Component {

  constructor() {
    super();
    this.state = {todo: {}};
  }

  componentDidMount() {
    var { router } = this.context;
    var todoId = router.getCurrentParams().todoId;
    $.ajax({
      url: 'http://localhost:8082' + '/todos/' + todoId,
      dataType: 'json',
      crossDomain: true,
      success: (todo) => this.setState({todo: todo}),
      error: (xhr, status, err) => console.error('http://localhost:8082', status, err.toString())
    })
  }

  render() {

    var todo = this.state.todo;

    return (
      <form>
        <div className="form-group">
          <label htmlFor="todoTitle">Todo Title</label>
          <input type="text" className="form-control" id="todoTitle" value={todo.title} />
        </div>
        <div className="form-group">
          <label htmlFor="todoDueDate">Due Date</label>
          <input type="date" className="form-control" id="todoDueDate" value={todo.dueDate} />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={todo.completed} />
          </label>
        </div>
      </form>
    )

  }
  
}

EditTodo.contextTypes = {
  router: React.PropTypes.func
};