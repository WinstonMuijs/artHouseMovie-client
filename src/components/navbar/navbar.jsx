import React from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

import "./navbar.scss";

export function Navbar({ user }) {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };

  return (
    <>
    <Navbar className="main-nav" expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand className="text-light">ArtHouseMovies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" color="#000"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {<Nav.Link href="/">Home</Nav.Link>}
          {<Nav.Link href={`/users/${user}`}>{user}</Nav.Link>}

          <Button onClick={onLoggedOut}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}