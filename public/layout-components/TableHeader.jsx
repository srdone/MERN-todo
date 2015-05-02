import React from 'react';

export default class TableHeader extends React.Component {

  constructor() {
    super();
  }

  render() {

    var headers = this.props.headers.map((header, i) => {
      return <th key={i}>{header}</th>
    });

    return (
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
    )

  }

}

TableHeader.propTypes = {
  headers: React.PropTypes.array.isRequired
};