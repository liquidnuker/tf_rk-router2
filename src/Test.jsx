import {HashRouter as Router, Route, Link} from 'react-router-dom';

function Testsub({match}) {
  return (
    <div>
      <p>Subroute</p>
      <p>match.params.itemName: {match.params.itemName}</p>
      <p>match.url: {match.url}</p>      
    </div>
  );
}

export default function Test({match}) {
  return (
    <div>
      <Link to="/">Home</Link>   

      <p>test</p>
      match.params.id: {match.params.id}
      <p>match.url: {match.url}</p>

      <Link to={match.url + "/unsorted"}>unsorted</Link>
      <br />      
      <Link to={match.url + "/unsorted2"}>unsorted2</Link>

      <Route exact path={match.url + "/:itemName"} component={Testsub}/>
    </div>
  );
}