import React, { Component } from 'react';
// use Link to navigate between routes
import Auth from './auth';
import { Link } from 'react-router-dom';
import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

// Header component holds the nav
class Header extends Component {

  // component render function
  render() {
    // component return statement
    return (
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">Home</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <Auth/>
      <NavItem>
        <Link to="/sign_up">Sign Up</Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}

export default Header
