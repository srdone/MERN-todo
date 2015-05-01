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
            </div>
          </div>
        </header>

        <RouteHandler />
      </div>
    )
  }

}