'use strict';

var data = require('./data');

var React = require('react');
var Hello = require('./components/Hello');
var CommentBox = require('./components/CommentBox');

React.render(<Hello />, document.getElementById('content'));

React.render(<CommentBox data={data} />, document.getElementById('tutorial'));