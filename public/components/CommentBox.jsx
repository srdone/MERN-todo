var CommentForm = require('./CommentForm');
var CommentList = require('./CommentList');

class CommentBox extends React.Component {

  constructor(props) {
    super(props);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.state = {data: []};
  }

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  }

  handleCommentSubmit(comment) {

    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});

    //$.ajax({
    //  url: this.props.url,
    //  dataType: 'json', //The server isn't currently set up to handle this properly
    //  type: 'POST',
    //  data: comment,
    //  success: function (data) {
    //    this.setState({data: data});
    //  }.bind(this),
    //  error: function (xhr, status, err) {
    //    console.error(this.props.url, status, err.toString());
    //  }.bind(this)
    //})
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }

}

module.exports = CommentBox;