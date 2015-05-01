import {Link} from 'react-router';
import { updateTodo } from '../actions/rest';

export default class TodoItem extends React.Component {

  constructor() {
    super();
    this.state = {todo: {}};

    this._handleEdit = this._handleEdit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({todo: this.props.todo});
  }

  _handleEdit() {
    var { router } = this.context;
    router.transitionTo('edit', {todoId: this.props.todo._id});
  }

  _handleChange(e) {
    var updatedTodo = $.extend({}, this.state.todo);
    updatedTodo.completed = e.target.checked;

    updateTodo(updatedTodo, (todo) => this.setState({todo: todo}));
  }

  render() {

    var dueDate = moment(this.state.todo.dueDate).format('M/D/YYYY');

    var dueText = (() => {
      if (this.state.todo.completed) {
        return <span>Complete!</span>
      } else {
        return <span>Due: {dueDate}</span>;
      }
    })();

    var strikethroughWhenComplete = function (text) {
      if (this.state.todo.completed) {
        return <del>{text}</del>
      } else {
        return <span>{text}</span>
      }
    }.bind(this);

    return (
      <div>
        <div className="input-group">
          <span className="input-group-addon">
            <input type="checkbox" checked={this.state.todo.completed} onChange={this._handleChange}/>
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