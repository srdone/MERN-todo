import TodoItem from './TodoItem';
import MakeEditable from './MakeEditable';

export default class TodoList extends React.Component {

  render() {
    return <div>
      <MakeEditable>
        <TodoItem />
      </MakeEditable>
      <MakeEditable>
        <TodoItem />
      </MakeEditable>
    </div>
  }

}