import Router from 'react-router';

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

export default class TodoApp extends React.Component {

  render() {
    return (
      <div>
        <header className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">Getting Things Done</span>
              <ul className="nav nabar-nav">
                <li><Link to="app">Main</Link></li>
                <li><Link to="edit">Edit Route</Link></li>
              </ul>
            </div>
          </div>
        </header>

        <RouteHandler />
      </div>
    )
  }

}