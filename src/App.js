import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';

// const Home = () => (<h2>Home</h2>)

export default function RouterExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/Issue">Issue</Link>
          </li>
          <li>
            <Link to="/MoreIssue">More Issue</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
            </Route>
            <Route path="/Issue">
              <Issue />
            </Route>

            <Route path="/MoreIssue">
              <MoreIssue />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
      <div>
        <h2>Home</h2>
      </div>
  );
}
function Issue() {
  return (
      <div>
        <h2>Issue</h2>
      </div>
  );
}
function MoreIssue() {
  return (
      <div>
        <h2>More Issue......</h2>
      </div>
  );
}

