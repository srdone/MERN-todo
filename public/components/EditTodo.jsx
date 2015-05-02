import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import Input from '../layout-components/Input';
import { getTodoById, updateTodo, deleteTodo } from '../actions/rest';

export default class EditTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todo: {}, originalTodo: {}};

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
    this._goHome = this._goHome.bind(this);
  }

  componentWillMount() {
    var { router } = this.context;
    var todoId = router.getCurrentParams().todoId;

    getTodoById(
      todoId,
      (todo) => {
        var copyOfTodo = $.extend(true, {}, todo);
        this.setState({todo: todo, originalTodo: copyOfTodo});
      }
    );
  }

  _handleChange(e) {
    var newTodoState = $.extend({}, this.state.todo);
    newTodoState[e.target.id] = e.target.id === 'completed' ? e.target.checked : e.target.value;
    this.setState({todo: newTodoState});
  }

  _handleSubmit(e) {
    e.preventDefault();

    updateTodo(this.state.todo, (todo) => this._goHome());
  }

  _handleCancel(e) {
    e.preventDefault();
    var copyOfOriginal = $.extend(true, {}, this.state.originalTodo);
    this.setState({todo: copyOfOriginal});

    this._goHome();
  }

  _handleDelete(e) {
    e.preventDefault();

    deleteTodo(this.state.todo._id, (todo) => this._goHome());
  }

  _goHome() {
    var {router} = this.context;
    router.transitionTo('app');
  }

  render() {

    var { title, dueDate, completed } = this.state.todo;

    dueDate = moment(dueDate).format('YYYY-MM-DD');

    return (
      <div className="container-fluid">
        <form>
          <Input label="Todo Title"
                 type="text"
                 id="title"
                 value={title}
                 onChange={this._handleChange} />

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
              <input type="checkbox" checked={completed} onChange={this._handleChange} id="completed"/>
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