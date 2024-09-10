import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../components/public/Logo";

const Header = () => {
  return (
    <div className="navMenu">
      <Navbar className="justify-content-end border" bg="light" expand="lg">
        <Nav>
          <Nav.Link href="/register/">Vous etes tatoueur?</Nav.Link>
          <Nav.Link href="/auth/login/">Connexion</Nav.Link>
        </Nav>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Container fluid>
        <Logo />
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <Nav.Link href="/home">Accueil</Nav.Link>
              <Nav.Link href="/tatoueurs">Tatoueurs</Nav.Link>
              <Nav.Link href="/styles">Styles</Nav.Link>
              <Nav.Link href="/galerie">Galerie</Nav.Link>
              <Nav.Link href="/flash">Tattoo Flash</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
