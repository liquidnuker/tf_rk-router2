// setup1
// ======================================================/

import {HashRouter as Router, 
  Route, 
  Link,
Switch, Redirect} from 'react-router-dom';

import Home from "./Home_wrap.jsx";
import Test from "./Test_wrap.jsx";
import Attacher from "./Attacher.jsx";

function About(props) {
  return (
    <div>     
      <Link to="/">Home</Link>             
    </div>  
  );
}

function Contactsub1({match}) {
  let x = match.params.id
  return (
    <div>
      
      {/**/}
      <Attacher 
      pr_params_id={match.params.id} />

      <p>ContactSub1</p>
      <p>match.params.id: {x}</p>
      <p>match.url: {match.url}</p>
      <p>id: {match.params.id} item: {match.params.item}</p>
    </div>
  );
}

function Contactsub2({match}) {
  let x = match.params.id
  return (
    <div>
      <p>ContactSub2</p>
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
      <p>ContactMain</p>

      <Link to={match.url + "/" + url2}>link1</Link> <br />

      <Link to={match.url + "/person1"}>person1</Link>

      {<Route path={match.url + "/:id"} component={Contactsub1}/>}

    {/*double param*/}
    <p><Link to={match.url + "/person2/item2"}>person2/item2</Link></p>
    <Route path={match.url + "/:id" + "/:item"} component={Contactsub2}/>
  {/*<Route path="/:id" component={extra}/>*/}

      {/* optional */}
      {/*<Route exact path={match.url} render={() => (
      <h3>Contact main</h3>
      )}/>*/}
    </div>  
  );
}

function NoMatch({location}) {
  return (
    <div>
    {location.pathname} not found
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

        <li><Link to="/1111">redirect</Link></li>
        <li><Link to="/tzzzt/lzzzk1">tezzzst</Link></li>
      </ul>

      <hr/>

      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={ContactMain}/>
      <Route path="/test/link1" component={Test}/>

      <Redirect from="/1111" to="/about"/>
      <Route component={NoMatch}/>
      </Switch>
      
    </div>
  </Router>
  );
}

ReactDOM.render(
  <RouterLinks />,
  document.getElementById('root')
);