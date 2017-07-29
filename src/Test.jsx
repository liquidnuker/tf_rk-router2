import {HashRouter as Router, Route, Link} from 'react-router-dom';

function Testsub({match}) {
  return (
    <div>
      <p>match.params.spec: {match.params.spec}</p>
      <p>match.url: {match.url}</p>      
    </div>
  );
}

export default function Test({match}) {
  return (
    <div>

      <Link to={match.url + "/unsorted"}>unsorted</Link>

      <Route exact path={match.url + "/:spec"} component={Testsub}/>

      <p>test</p>
      match.params.id: {match.params.id}
      <p>match.url: {match.url}</p>
    </div>
  );
}