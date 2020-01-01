import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/NavBar';
import Form from 'react-bootstrap/Form';
import { TEXT, NAVIGATION_BAR } from '../../constants';

const NavigationBar = () => {
  const {
    EASYMEALS, MEALPLAN, MY_PROFILE, LOGOUT, PROFILE,
  } = TEXT;
  const {
    BG, EXPAND, BRAND_HREF, TOGGLE_ARIA_CONTROLS, COLLAPSE_ID, NAV_CLASS, LINK_HREF,
    DROPDOWN_ID, DROWDOWN_HREF_ITEM_1, DROPDOWN_DIVIDER_HREF_ITEM_1,
  } = NAVIGATION_BAR;
  return (
    <Navbar bg={BG} expand={EXPAND}>
      <Navbar.Brand href={BRAND_HREF}>{EASYMEALS}</Navbar.Brand>
      <Navbar.Toggle aria-controls={TOGGLE_ARIA_CONTROLS} />
      <Navbar.Collapse id={COLLAPSE_ID}>
        <Nav className={NAV_CLASS}>
          <Nav.Link href={LINK_HREF}>{MEALPLAN}</Nav.Link>
        </Nav>
        <Form inline>
          <NavDropdown title={PROFILE} id={DROPDOWN_ID}>
            <NavDropdown.Item href={DROWDOWN_HREF_ITEM_1}>
              {MY_PROFILE}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href={DROPDOWN_DIVIDER_HREF_ITEM_1}>
              {LOGOUT}
            </NavDropdown.Item>
          </NavDropdown>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationBar;
