import TodoItem from './TodoItem';
import MakeEditable from './MakeEditable';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let todoNodes = this.props.todos.map((todo) => {
      return <TodoItem todo={todo}/>
    });

    return <div>
      {todoNodes}
    </div>
  }

}