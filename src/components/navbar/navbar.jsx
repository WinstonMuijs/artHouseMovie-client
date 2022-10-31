import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";





export function Menubar({ user }) {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };

    const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
    <>
    <Navbar
      key={user}
      className="main-nav" 
      expand="lg" 
      bg="dark" 
      variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"
          className="text-light">ArtHouseMovies</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          {isAuth() && <Nav.Link as={ Link } to="/" >Home</Nav.Link>}
          {isAuth() && <Nav.Link  as={ Link } to={`/users/${user}`}>{user}</Nav.Link>}

          {isAuth() && (<Button onClick={() => {onLoggedOut();}}>Logout</Button>)}

          {!isAuth() && (<Nav.Link as={ Link } to="/">Sign-in</Nav.Link>)}

          {!isAuth() && (<Nav.Link as={ Link } to="/register">Register</Nav.Link>)}
        </Nav>
        
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}