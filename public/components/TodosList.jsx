import TodoItem from './TodoItem';

export default class TodosList extends React.Component {

  render() {
    return (
      <div>
        <div>I'm the Todos List</div>
        <TodoItem />
      </div>
    )
  }
  
}