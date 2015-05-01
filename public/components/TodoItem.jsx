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

    var dueText = (() => {
      if (this.props.todo.completed) {
        return <span>Complete!</span>
      } else {
        return <span>Due: {dueDate}</span>;
      }
    })();

    var strikethroughWhenComplete = function (text) {
      if (this.props.todo.completed) {
        return <del>{text}</del>
      } else {
        return <span>{text}</span>
      }
    }.bind(this);

    var link = '/edit/' + this.props.todo._id;

    return (
      <div>
        <div className="input-group">
          <span className="input-group-addon">
            <input type="checkbox" checked={this.props.todo.completed} />
          </span>

          <span className="input-group-addon">
            {dueText}
          </span>

          <span className="input-group-addon">
            {strikethroughWhenComplete(this.props.todo.title)}
          </span>

          <span className="input-group-addon">
            <button className="btn btn-primary" onClick={this._handleEdit}>
              Edit
            </button>
          </span>
        </div>
      </div>
    )
  }

}

TodoItem.contextTypes = {
  router: React.PropTypes.func
};