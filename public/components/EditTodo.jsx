export default class EditTodo extends React.Component {

  constructor() {
    super();
    this.state = {todo: {}, originalTodo: {}};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
    this._goHome = this._goHome.bind(this);
  }

  componentDidMount() {
    var { router } = this.context;
    var todoId = router.getCurrentParams().todoId;
    $.ajax({
      url: 'http://localhost:8082' + '/todos/' + todoId,
      dataType: 'json',
      crossDomain: true,
      success: (todo) => {
        var copyOfTodo = $.extend(true, {}, todo);
        this.setState({todo: todo, originalTodo: copyOfTodo});
      },
      error: (xhr, status, err) => console.error('http://localhost:8082', status, err.toString())
    })
  }

  _handleChange(e) {
    var newTodoState = $.extend({}, this.state.todo);
    newTodoState[e.target.id] = e.target.id === 'completed' ? e.target.checked : e.target.value;
    this.setState({todo: newTodoState});
  }

  _handleSubmit(e) {
    e.preventDefault();

    $.ajax({
      url: 'http://localhost:8082' + '/todos/' + this.state.todo._id,
      dataType: 'json',
      method: "PUT",
      data: this.state.todo,
      crossDomain: true,
      success: (todo) => {
        var copyOfTodo = $.extend(true, {}, todo);
        this.setState({todo: todo, originalTodo: copyOfTodo});
        this._goHome();
      },
      error: (xhr, status, err) => console.error('http://localhost:8082', status, err.toString())
    })
  }

  _handleCancel(e) {
    e.preventDefault();
    var copyOfOriginal = $.extend(true, {}, this.state.originalTodo);
    this.setState({todo: copyOfOriginal});

    this._goHome();
  }

  _goHome() {
    var {router} = this.context;
    router.transitionTo('app');
  }

  render() {

    var todo = this.state.todo;

    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Todo Title</label>
          <input type="text"
                 className="form-control"
                 id="title"
                 value={todo.title}
                 ref="title"
                 onChange={this._handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input type="date"
                 className="form-control"
                 id="dueDate"
                 value={todo.dueDate}
                 ref="dueDate"
                 onChange={this._handleChange} />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={todo.completed} onChange={this._handleChange} id="completed"/>
          </label>
        </div>
        <button className="btn btn-primary" onClick={this._handleSubmit}>Submit</button>
        <button className="btn btn-warning" onClick={this._handleCancel}>Cancel</button>
      </form>
    )

  }
  
}

EditTodo.contextTypes = {
  router: React.PropTypes.func
};