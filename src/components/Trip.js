import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { Nav, tabs, NavItem, NavDropdown, Dropdown, MenuItem } from 'react-bootstrap';

class Trip extends Component {

  handleSelect(k) {
    console.log('selected ', k)
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
        <NavItem eventKey="1">
          Trip Overview
        </NavItem>
        <NavItem eventKey="2" title="Item">
          Trip Budget
        </NavItem>
        <NavItem eventKey="3">
          Packing List
        </NavItem>
        <NavDropdown eventKey="4" title="Destinations" id="nav-dropdown">
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}

export default Trip
