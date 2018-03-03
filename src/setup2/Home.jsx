import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

class Home_Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    // binders
    
  }
  // hooks
  componentDidMount() {
    document.title = `Home ${this.props.pr_match_url}`;
  }
  
  // methods
  
  render() {
    return (
      <div>
        <p>Home_Main</p>
        <p>match.url: {this.props.pr_match_url}</p>

        <br />
        <br />
        <Link to="/projects/subroute1">Projects</Link>
      </div>
    );
  }
}

// url matcher
export default function Home({match}) {
  return (
    <div>    
      <Home_Main 
       pr_match_url={match.url} />
    </div>  
  );
}