import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <TodoForm />
      <TodoList todos={this.props.todos}/>
    </div>
  }

}

