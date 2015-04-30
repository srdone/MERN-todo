export default class TodoItem extends React.Component{

  constructor(props) {
    super(props);
    this.state = {todo: this.props.todo};
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    e.preventDefault();

    var checkBoxNode = React.findDOMNode(this.refs.todoComplete);

    var updatedTodo = {
      title: this.props.todo.title,
      dueDate: this.props.todo.dueDate,
      completed: checkBoxNode.checked
    };

    this.setState({todo: updatedTodo});

    $.ajax({
      url: 'http://localhost:8082' + '/todos/' + this.props.todo._id,
      type: 'PUT',
      dataType: 'json',
      crossDomain: true,
      data: updatedTodo,
      success: (todo) => {
        this.setState({todo: todo});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    })
  }

  render() {

    var prettyDueDate = moment(this.props.todo.dueDate).format('M/D/YYYY');

    return <div className="well-sm">
        {this.props.todo.title} <br />
        {prettyDueDate} <br />
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={this.state.todo.completed} onChange={this._handleChange} ref="todoComplete"/> Is Complete
          </label>
        </div>
    </div>
  }

}