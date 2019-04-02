import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <h1 className="custom-brand">
          Gifts by Sansae
        </h1>

        <Navbar collapseOnSelect className="custom-navbar">
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <Link to="about">About</Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <Link to="item">Items</Link>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <Link to="signup">Sign-Up</Link>
              </NavItem>
              <NavItem eventKey={3} href="#">
                Sign-In
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;
