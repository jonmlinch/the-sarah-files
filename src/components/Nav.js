import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  
  render() {
    return (
      <div>
       <nav className="navbar">
        <div className="nav-items">
           <Link to="/" className="nav-element"><strong>Home</strong></Link>
           <Link to="/about" className="nav-element"><strong>About</strong></Link>
           <Link to="/research" className="nav-element"><strong>Research</strong></Link>
           <Link to="/publications" className="nav-element"><strong>Me et al.</strong></Link>
           <Link to="/editor" className="nav-element">Editor</Link>
        </div>
       </nav>
      </div>
    );
  }
}

export default Nav;