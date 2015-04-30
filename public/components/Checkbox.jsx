export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {checked: this.props.checked};
    console.log(this.state);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({checked: event.target.checked});
    this.props.update(event);
  }

  render() {
    return <div className="checkbox">
        <label>
          <input type="checkbox" checked={this.state.checked} onChange={this._handleChange} ref="checkbox"/> {this.props.label}
        </label>
      </div>
  }

}