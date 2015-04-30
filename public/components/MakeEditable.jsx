export default class MakeEditable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editable: false};
    this._toggleEditable = this._toggleEditable.bind(this);
  }

  _toggleEditable() {
    this.setState((previousState) => {
      return {editable: !previousState.editable}
    });
  }

  render() {

    if (this.state.editable) {
      return <div>
        <input type="text" value={this.props.value}/>
        <button onClick={this._toggleEditable}>Done Editing</button>
      </div>
    } else {
      return <div>
          {this.props.children}
          <button onClick={this._toggleEditable}>Make Editable</button>
        </div>
    }
  }

}