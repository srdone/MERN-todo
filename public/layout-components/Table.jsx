import React from 'react';

export default class Table extends React.Component {

  render() {
    return <table className="table table-hover">
        {this.props.children}
      </table>
  }

}