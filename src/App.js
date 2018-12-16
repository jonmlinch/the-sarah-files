import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Wysiwyg from './components/Wysiwyg'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/editor" component={Wysiwyg} />
        </div>
      </Router>
    );
  }
}

export default App;
