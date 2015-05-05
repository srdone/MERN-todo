import React from 'react';
import moment from 'moment';

//TODO: fix issue with initial value not initializing

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: this.props.value};

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    this.setState({value: e.target.value});
    this.props.onChange(e);
  }

  render() {

    var { id, label, type } = this.props;

    var value = this.state.value;

    if (type === 'date') {
      value = moment(value).format('YYYY-MM-DD');
    }

    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input type={type}
               className="form-control"
               id={id}
               ref={id}
               value={value}
               onChange={this._handleChange} />
      </div>
    )
  }

}