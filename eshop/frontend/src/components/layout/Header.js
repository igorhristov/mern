import React from "react";
import { Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <Navbar bg="info" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src="https://www.idevdirect.com/blog/wp-content/uploads/2015/11/eshop_joomla_logo.png"
                width="100px"
                alt="logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Route render={({ history }) => <Search history={history} />} />

              <LinkContainer to="/login" className="ml-4">
                <Nav.Link>
                  <i className="fa fa-user"></i> Login
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <span id="cart" className="ml-3">
                    Cart
                  </span>
                  <span className="ml-1" id="cart_count">
                    2
                  </span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
