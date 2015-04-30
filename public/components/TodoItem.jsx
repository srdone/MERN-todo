export default class TodoItem extends React.Component {

  constructor() {
    super();
  }

  render() {

    var dueDate = moment(this.props.todo.dueDate).format('M/D/YYYY');

    var itemText = (() => {
      if (this.props.todo.completed) {
        return <del>{this.props.todo.title}: Due Date: {dueDate}</del>
      } else {
        return <span>{this.props.todo.title}: Due Date: {dueDate}</span>
      }
    })();

    return (
      <div>
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={this.props.todo.completed} />
            {itemText}
          </label>
        </div>
      </div>
    )
  }

}