import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import BlogEntry from './BlogEntry'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/blogentry" copmponent={ BlogEntry } />
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
