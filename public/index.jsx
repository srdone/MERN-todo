import React from 'react';
import TodoApp from './components/TodoApp';
import Checkbox from './components/Checkbox';


React.render(<TodoApp url="http://localhost:8082"/>, document.getElementById('app'));

var test = {
  checked: true,
  label: 'testing checkbox'
};

var update = function (checked) {
  console.log('update called');
  console.log('checked?:', checked);
};

React.render(<Checkbox checked={test.checked} update={update} label={test.label} />, document.getElementById('test'));