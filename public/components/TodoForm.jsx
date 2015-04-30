export default class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this._handleAddTodo = this._handleAddTodo.bind(this);
  }

  _handleAddTodo(e) {
    e.preventDefault();

    var titleNode = React.findDOMNode(this.refs.newTodoTitle);
    var dueDateNode = React.findDOMNode(this.refs.newTodoDueDate);

    var newTodo = {
      title: titleNode.value.trim(),
      dueDate: dueDateNode.value.trim(),
      completed: false
    };

    if (newTodo.title && newTodo.dueDate) {
      $.ajax({
        url: this.props.url + '/todos',
        type: 'POST',
        dataType: 'json',
        crossDomain: true,
        data: newTodo,
        success: () => {
          titleNode.value = '';
          dueDateNode.value = '';
        },
        error: (xhr, status, err) => {
          console.error(this.props.url, status, err.toString());
        }
      });
    }
  }

  render() {
    return <form className="form-inline">
        <div className="form-group">
          <label htmlFor="todoTitle">New Todo:</label>
          <input type="text" className="form-control" id="todoTitle" placeholder="Clean the house..." ref="newTodoTitle"/>
        </div>
        <div>
          <label htmlFor="todoDueDate">Due Date</label>
          <input type="date" className="form-control" id="todoDueDate" placeholder="mm/dd/yyyy" ref="newTodoDueDate" />
        </div>
        <button className="btn btn-primary" onClick={this._handleAddTodo}>Add</button>
      </form>
  }

}