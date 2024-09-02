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
      <Navbar className="justify-content-end border" bg="light" expand="lg">
        <Container fluid>
        <Logo />
            <Nav>
              <Nav.Link href="/home">Accueil</Nav.Link>
              <Nav.Link href="/tatoueurs">Tatoueurs</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
