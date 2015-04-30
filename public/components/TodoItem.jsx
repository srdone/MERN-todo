export default class TodoItem extends React.Component{

  render() {

    var prettyDueDate = moment(this.props.todo.dueDate).format('M/D/YYYY');

    return <div className="well-sm">
        {this.props.todo.title} <br />
        {prettyDueDate} <br />
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={this.props.todo.completed} /> Is Complete
          </label>
        </div>
    </div>
  }

}