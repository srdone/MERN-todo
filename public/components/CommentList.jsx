var Comment = require('./Comment');

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        Hello World, I am a Comment List!
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* Comment</Comment>
      </div>
    );
  }
});

module.exports = CommentList;