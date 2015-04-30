import React from 'react';
import TodoApp from './components/TodoApp';

let todos = [
  {text: 'Todo 1'},
  {text: 'Todo 2'}
];


React.render(<TodoApp todos={todos}/>, document.getElementById('app'));