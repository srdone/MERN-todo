import React from 'react';

export default class Button extends React.Component {

  render() {

    return (
      <button className="btn btn-primary" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }

}

Button.propTypes = {
  onClick: React.PropTypes.func
};