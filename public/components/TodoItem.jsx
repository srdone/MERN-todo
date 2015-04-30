export default class TodoItem extends React.Component{

  render() {
    return <div>{this.props.todo.text}</div>
  }

}