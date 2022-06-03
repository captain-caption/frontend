import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Auth from "./Auth/Auth";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">Captain Caption</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About the Devs</Nav.Link>
            <Auth></Auth>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
export default Header;
