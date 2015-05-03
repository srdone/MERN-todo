import React from 'react';

export default class TableRow extends React.Component {

  render() {

    var rowElements = this.props.children.map((element, i) => {
      return <td key={i}>{element}</td>
    });

    return <tr className={this.props.status}>{rowElements}</tr>

  }

}

TableRow.propTypes = {
  status: React.PropTypes.oneOf(['active', 'success', 'warning', 'danger', 'info'])
}