import Router from 'react-router';

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

export default class TodoApp extends React.Component {

  render() {
    return (
      <div>
        <header>
          I'm the Todo App
          <ul>
            <li><Link to="app">Main</Link></li>
            <li><Link to="edit">Edit Route</Link></li>
          </ul>
        </header>

        <RouteHandler />
      </div>
    )
  }

}