export default class EditTodo extends React.Component {

  constructor() {
    super();
    this.state = {todo: {}};
  }

  componentDidMount() {
    var { router } = this.context;
    var todoId = router.getCurrentParams().todoId;
    $.ajax({
      url: 'http://localhost:8082' + '/todos/' + todoId,
      dataType: 'json',
      crossDomain: true,
      success: (todo) => this.setState({todo: todo}),
      error: (xhr, status, err) => console.error('http://localhost:8082', status, err.toString())
    })
  }

  render() {

    return (
      <div>
        {this.state.todo}
      </div>
    )

  }
  
}

EditTodo.contextTypes = {
  router: React.PropTypes.func
};