var CommentForm = require('./CommentForm');
var CommentList = require('./CommentList');

module.exports = CommentBox = React.createClass({

  render: function () {
    return (
      <div className="commentBox">
        Hello, world! I am a commentBox.
        <CommentForm />
        <CommentList />
      </div>
    );
  }

});