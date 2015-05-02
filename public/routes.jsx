import React from 'react';
import Router from 'react-router';
import TodoApp from './components/TodoApp';
import TodosList from './components/TodosList';
import EditTodo from './components/EditTodo';

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var routes = (
  <Route name="app" path="/" handler={TodoApp}>
    <DefaultRoute handler={TodosList} />
    <Route name="edit" path="edit/:todoId" handler={EditTodo} />
  </Route>
);

module.exports = {
  routes: routes
};