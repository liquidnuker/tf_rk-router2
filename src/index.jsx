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
      <p>id: {match.params.id} item: {match.params.item}</p>
    </div>
  );
}

function ContactMain({match}) {
  const url2 = "jfkdjkfdkfkjf";
  return (
    // ok
    <div>     
      <Link to={match.url + "/" + url2}>link1</Link>

      <Link to={match.url + "/person1"}>person1</Link>
      <Route path={match.url + "/:id"} component={Contact}/>

    {/*double param*/}
    <p><Link to={match.url + "/person2/item2"}>person2/item2</Link></p>
    <Route path={match.url + "/:id" + "/:item"} component={Contact}/>
  {/*<Route path="/:id" component={extra}/>*/}

      {/* optional */}
      {/*<Route exact path={match.url} render={() => (
      <h3>Contact main</h3>
      )}/>*/}
    </div>  
  );
}

function RouterLinks(props) {
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
  <RouterLinks />,
  document.getElementById('root')
);