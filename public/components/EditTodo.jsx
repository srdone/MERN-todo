import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import { getTodoById, updateTodo, deleteTodo } from '../utilities/todoCRUD';

var TodoStore = require('../stores/TodoStore');
var TodoActions = require('../actions/TodoActions');

export default class EditTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todo: {}, originalTodo: {}};

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
    this._goHome = this._goHome.bind(this);
    this._handleCheckboxChange = this._handleCheckboxChange.bind(this);
  }

  componentWillMount() {
    var { router } = this.context;
    var todoId = router.getCurrentParams().todoId;

    var todo = TodoStore.getById(todoId);
    var copyOfTodo = $.extend(true, {}, todo);
    this.setState({todo: todo, originalTodo: copyOfTodo});
    console.log('state', this.state);
  }

  _handleChange(e) {
    var newTodoState = $.extend({}, this.state.todo);
    //TODO: Abstract the logic below into a new 'input' component
    newTodoState[e.target.id] = e.target.id === 'dueDate' ? moment(e.target.value).startOf('day').toDate() : e.target.value;
    this.setState({todo: newTodoState});
  }

  _handleCheckboxChange(e) {
    //TODO: Abstract this logic into a new 'input' component
    var currentTodo = this.state.todo;
    var newTodoState = $.extend({}, currentTodo);
    newTodoState.completed = e.target.checked;
    this.setState({todo: newTodoState});
  }

  _handleSubmit(e) {
    e.preventDefault();

    TodoActions.update(this.state.todo);
    this._goHome();
  }

  _handleCancel(e) {
    e.preventDefault();
    var copyOfOriginal = $.extend(true, {}, this.state.originalTodo);
    this.setState({todo: copyOfOriginal});

    this._goHome();
  }

  _handleDelete(e) {
    e.preventDefault();

    TodoActions.destroy(this.state.todo);
    this._goHome();
  }

  _goHome() {
    var {router} = this.context;
    router.transitionTo('app');
  }

  render() {

    var { title, dueDate, completed } = this.state.todo;

    //TODO: we have this in multiple spots - should abstract as part of an input component
    dueDate = moment(dueDate).format('YYYY-MM-DD');

    return (
      <div className="container-fluid">
        <form>

          <div className="form-group">
            <label htmlFor="title">Todo Title</label>
            <input type="text"
                   className="form-control"
                   id="title"
                   value={title}
                   ref="title"
                   onChange={this._handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input type="date"
                   className="form-control"
                   id="dueDate"
                   value={dueDate}
                   ref="dueDate"
                   onChange={this._handleChange} />
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" checked={completed} onChange={this._handleCheckboxChange} id="completed"/>
            </label>
          </div>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={this._handleSubmit}>Submit</button>
            <button className="btn btn-warning" onClick={this._handleCancel}>Cancel</button>
            <button className="btn btn-danger" onClick={this._handleDelete}>Delete</button>
          </div>
        </form>
      </div>
    )

  }
  
}

EditTodo.contextTypes = {
  router: React.PropTypes.func
};

EditTodo.propTypes = {

};