import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import BlogEntry from './components/BlogEntry'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/blogentry" component={BlogEntry} />
        </div>
      </Router>
    );
  }
}

export default App;
