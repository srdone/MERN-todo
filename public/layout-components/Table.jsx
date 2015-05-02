import React from 'react';
import TableHeader from './TableHeader';

export default class Table extends React.Component {

  constructor() {
    super();
  }

  render() {

    if(this.props.caption) {
      var caption = <caption>{this.props.caption}</caption>;
    }

    return <table className="table table-hover">
          {caption}
        <TableHeader headers={this.props.headers} />
        <tbody>
          {this.props.children}
        </tbody>
      </table>
  }

}

Table.propTypes = {
  headers: React.PropTypes.array.isRequired
};