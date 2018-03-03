export default class Attacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    // binders
    
  }
  // hooks
  componentDidMount() {
    console.log("componentDidMount " + this.props.pr_params_id);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate " + this.props.pr_params_id);
  }
  // methods
  
  render() {
    return (
      <div>Attacher {this.props.pr_params_id}</div>
    );
  }
}