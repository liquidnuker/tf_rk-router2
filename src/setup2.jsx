// setup2. with route config
// ======================================================/
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

// route components
// ======================================================/
function Home({match}) {
  return (
    <div>    
      <h2>Home</h2> 
      <p>match.url: {match.url}</p>
    </div>  
  );
}

function About({match}) {
  return (
  <div>   
    <h2>About</h2>   
    <p>match.url: {match.url}</p>
  </div>
  )  
}

function Projects({ routes, match }) {
  return (
  <div>   
      <h2>Projects</h2>   
      <p>match.url: {match.url}</p>
      <ul>
        <li><Link to="/projects/subroute1">SubRoute1</Link></li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
    )
}

function ProjectSub1({match}) {
  return (
    <div>    
      <p>ProjectSub1</p> 
      <p>match.url: {match.url}</p>
    </div>  
  );
}

function Contact ({ routes, match }) {
  return (
  <div>
    <h2>Contact</h2>
    <p>match.url: {match.url}</p>
    <ul>
      <li><Link to="/contact/subroute1">SubRoute1</Link></li>
      <li><Link to="/contact/subroute2">SubRoute2</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
  )
}

function ContactSub1({match}) {
  return (
    <div>    
      <p>ContactSub1</p> 
      <p>match.url: {match.url}</p>
    </div>  
  );
}

function ContactSub2({match}) {
  return (
    <div>    
      <p>ContactSub2</p> 
      <p>match.url: {match.url}</p>
    </div>  
  );
}

// route config
// ======================================================/
const routes = [
  { path: '/home',
    component: Home
  },
  { path: '/about',
    component: About
  },
  { path: '/projects',
    component: Projects,
    routes: [
      { path: '/projects/subroute1',
        component: ProjectSub1
      },
    ]
  },
  { path: '/contact',
    component: Contact,
    routes: [
      { path: '/contact/subroute1',
        component: ContactSub1
      },
      { path: '/contact/SubRoute2',
        component: ContactSub2
      }
    ]
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
// ======================================================/
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const RouteConfigExample = () => (
  <Router>
    <div>
      <p>Main Linker</p>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

ReactDOM.render(
  <RouteConfigExample />,
  document.getElementById('root')
);



