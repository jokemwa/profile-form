import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import jobseeker from "./components/jobseeker.component";
import company from "./components/Company.component";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
         
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/jobseeker"}>jobseeker</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Company"}>Company</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/jobseeker' component={jobseeker} />
            
            <Route path="/Company" component={company} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;