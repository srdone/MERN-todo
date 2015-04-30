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
        Made Editable
        <button onClick={this._toggleEditable}>Done Editing</button>
        {this.props.children}
      </div>
    } else {
      return <div>
          {this.props.children}
          <button onClick={this._toggleEditable}>Make Editable</button>
        </div>
    }
  }

}