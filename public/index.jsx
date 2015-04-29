/** @jsx React.DOM */

'use strict';

var React = require('react');
var Hello = require('./components/Hello');
var CommentBox = require('./components/CommentBox');

React.render(<Hello />, document.getElementById('content'));

React.render(<CommentBox />, document.getElementById('tutorial'));