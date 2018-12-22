import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import '../App.css';

class TitleBar extends Component {
  
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" id="signature">Sarah B. Bassing</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={2} href="#">
              <Link to="/about" className="nav-element">About</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/research" className="nav-element">Research</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/publications" className="nav-element">Publications</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/editor" className="nav-element">Editor</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>      

      // <div>
      //  <nav className="navbar">
      //   <div className="nav-items">
      //      <Link to="/" className="nav-element"><strong>Home</strong></Link>
      //      <Link to="/about" className="nav-element"><strong>About</strong></Link>
      //      <Link to="/research" className="nav-element"><strong>Research</strong></Link>
      //      <Link to="/publications" className="nav-element"><strong>Me et al.</strong></Link>
      //      <Link to="/editor" className="nav-element">Editor</Link>
      //   </div>
      //  </nav>
      // </div>
    );
  }
}

export default TitleBar;