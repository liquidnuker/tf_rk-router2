import {HashRouter as Router, Route, Link} from 'react-router-dom';

import Home from "./Home_wrap.jsx";
import Test from "./Test_wrap.jsx";

function About(props) {
  return (
    // ok
    <div>     
      <Link to="/">Home</Link>             
    </div>  
  );
}

function Contact({match}) {
  let x = match.params.id
  return (
    <div>
      <p>match.params.id: {x}</p>
      <p>match.url: {match.url}</p>
    </div>
  );
}

function ContactMain({match}) {
  return (
    // ok
    <div>     
      <p>contact</p>

      <Link to={`${match.url}/person-1`}>
          person1
      </Link>

      <Route exact path={`${match.url}/:id`} component={Contact}/>

    {/* optional */}
      {/*<Route exact path={match.url} render={() => (
      <h3>Contact main</h3>
      )}/>*/}
    </div>  
  );
}

function RouterMain(props) {
  return (
    <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/test/link1">test</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={ContactMain}/>
      <Route path="/test/link1" component={Test}/>
      
    </div>
  </Router>
  );
}

ReactDOM.render(
  <RouterMain />,
  document.getElementById('root')
);