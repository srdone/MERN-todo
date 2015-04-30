export default class MakeEditable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return <div>
      Made Editable
        {this.props.children}
    </div>
  }

}