class PT1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    // binders
    
  }
  // hooks
  componentDidMount() {
    document.title = `${this.props.pr_match_url}`;
  }
  
  // methods
  
  render() {
    return (
      <div>
        <p>match.url: {this.props.pr_match_url}</p>
        <p>match.params.item: {this.props.pr_match_params_item}</p>
      </div>
    );
  }
}

export default function ParamTester1({match}) {
  return (
    <div>
      <PT1 
      pr_match_url={match.url} 
      pr_match_params_item={match.params.item} />
    </div>
  );
}