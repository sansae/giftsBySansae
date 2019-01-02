import React from 'react';
import { BrowserRouter,  } from 'react-router-dom';
// import Landing from './Landing';
// import About from './About';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';


class Navigation extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar className="custom-navbar">
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                {/*<Route exact path="/" component={Landing} />*/}
                Landing
              </NavItem>
              <NavItem eventKey={2} href="#">
                About
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Items
              </NavItem>
              <NavItem eventKey={2} href="#">
                Sign-Up
              </NavItem>
              <NavItem eventKey={3} href="#">
                Sign-In
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <h1 className="custom-brand">
          Gifts by Sansae
        </h1>
      </div>
      </BrowserRouter>
    )
  }
}

export default Navigation;
