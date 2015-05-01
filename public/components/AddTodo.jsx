import { saveTodo } from '../actions/rest.js';

export default class AddTodo extends React.Component {

  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    var newTodoTitleNode = React.findDOMNode(this.refs.newTodoTitle);
    var newTodoDueDateNode = React.findDOMNode(this.refs.newTodoDueDate);

    var newTodo = {
      title: newTodoTitleNode.value.trim(),
      dueDate: newTodoDueDateNode.value.trim()
    };

    saveTodo(newTodo,
      (savedTodo) => {
        newTodoTitleNode.value = '';
        newTodoDueDateNode.value = '';
        this.props.todoAdded(savedTodo);
      },
      (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    );

  };

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label for="newTodoTitle">New Todo Title</label>
          <input type="text" className="form-control" id="newTodoTitle" ref="newTodoTitle" />
        </div>
        <div className="form-group">
          <label for="newTodoTitle">New Todo Title</label>
          <input type="date" className="form-control" id="newTodoTitle" ref="newTodoDueDate" />
        </div>
        <button className="btn btn-primary" onClick={this._handleSubmit}>Add New Todo</button>
      </form>
    )
  }

};