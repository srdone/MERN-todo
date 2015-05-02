import React from 'react';

export default class TableHeader extends React.Component {

  render() {

    var headers = this.props.headers.map((header) => {
      return <th>{header}</th>
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