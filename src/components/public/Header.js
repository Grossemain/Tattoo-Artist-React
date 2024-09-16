import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoutButton from "../../components/admin/LogoutButton";

import Logo from "../../components/public/Logo";
import { accountService } from "../../_services";

const Header = () => {
  const userRole = accountService.getRole(); // Fonction pour obtenir le rôle de l'utilisateur
  console.log("role_id:", userRole);
  return (
    <div className="navMenu">
      <Navbar className="justify-content-end border" bg="light" expand="lg">
        <Nav>
          <Nav.Link href="/register/">Vous etes tatoueur?</Nav.Link>
          <Nav.Link href="/auth/login/">Connexion</Nav.Link>
          {userRole == 1 && <Nav.Link href="/mon-compte/">Mon compte</Nav.Link>}
          {userRole == 2 && <Nav.Link href="/admin/">Admin</Nav.Link>}
        </Nav>
        {userRole ==1 || userRole ==2 && <LogoutButton />}
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Logo />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <Nav.Link href="/tatoueurs">Tatoueurs</Nav.Link>
              <Nav.Link href="/styles">Styles</Nav.Link>
              <Nav.Link href="/galerie">Galerie</Nav.Link>
              <Nav.Link href="/flash">Tattoo Flash</Nav.Link>
              <Nav.Link href="/tattooshops">Salons</Nav.Link>
              <Nav.Link href="/articles">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
