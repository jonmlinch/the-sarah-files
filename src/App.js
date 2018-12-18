import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Research from './components/Research'
import Pubs from './components/Publications'
import Wysiwyg from './components/Wysiwyg'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/research" component={Research} />
          <Route path="/publications" component={Pubs} />
          <Route path="/editor" component={Wysiwyg} />
        </div>
      </Router>
    );
  }
}

export default App;
