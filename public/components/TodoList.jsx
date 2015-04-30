import TodoItem from './TodoItem';
import MakeEditable from './MakeEditable';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let todoNodes = this.props.todos.map((todo) => {
      return <MakeEditable value={todo.title}>
          <TodoItem todo={todo}/>
        </MakeEditable>
    });

    return <div>
      {todoNodes}
    </div>
  }

}