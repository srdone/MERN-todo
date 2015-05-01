import {Link} from 'react-router'

export default class TodoItem extends React.Component {

  constructor() {
    super();
    this._handleEdit = this._handleEdit.bind(this);
  }

  _handleEdit() {
    var { router } = this.context;
    router.transitionTo('edit', {todoId: this.props.todo._id});
  }

  render() {

    var dueDate = moment(this.props.todo.dueDate).format('M/D/YYYY');

    var itemText = (() => {
      if (this.props.todo.completed) {
        return <del className="h5">{this.props.todo.title}: Due Date: {dueDate}</del>
      } else {
        return <span className="h5">{this.props.todo.title}: Due Date: {dueDate}</span>
      }
    })();

    var link = '/edit/' + this.props.todo._id;

    return (
      <div>
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={this.props.todo.completed} />
            {itemText}
            <button className="btn btn-primary" onClick={this._handleEdit}>
              Edit
            </button>
          </label>
        </div>
      </div>
    )
  }

}

TodoItem.contextTypes = {
  router: React.PropTypes.func
};