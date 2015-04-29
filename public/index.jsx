'use strict';

var React = require('react');
var Hello = require('./components/Hello');
var CommentBox = require('./components/CommentBox');

React.render(<Hello />, document.getElementById('content'));

React.render(<CommentBox url="data.json" pollInterval={2000}/>, document.getElementById('tutorial'));