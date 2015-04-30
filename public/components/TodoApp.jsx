import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class TodoApp extends React.Component {

  render() {
    return <div>
      <TodoForm />
      <TodoList />
    </div>
  }

}

