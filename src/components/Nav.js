import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  
  render() {
    return (
      <div>
       <nav>
           <Link to="/">Home</Link>
           <Link to="/editor">Editor</Link>
       </nav>
      </div>
    );
  }
}

export default Nav;