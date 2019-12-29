import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/NavBar';
import Form from 'react-bootstrap/Form';

const NavigationBar = () => {
  console.log('Navbar');

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Easymeals</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#link">MealPlan</Nav.Link>
        </Nav>
        <Form inline>
          <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
