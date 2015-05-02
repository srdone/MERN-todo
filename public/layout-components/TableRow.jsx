import React from 'react';

export default class TableRow extends React.Component {

  render() {

    var rowElements = this.props.children.map((element) => {
      return <td>{element}</td>
    });

    return <tr>{rowElements}</tr>

  }

}