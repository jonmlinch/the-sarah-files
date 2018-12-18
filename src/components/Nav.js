import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  
  render() {
    return (
      <div>
       <nav className="navbar">
           <Link to="/" className="nav-element">Home</Link>
           <Link to="/about" className="nav-element">About</Link>
           <Link to="/research" className="nav-element">Research</Link>
           <Link to="/publications" className="nav-elemnt">Me et al.</Link>
           <Link to="/editor" className="nav-element">Editor</Link>
       </nav>
      </div>
    );
  }
}

export default Nav;