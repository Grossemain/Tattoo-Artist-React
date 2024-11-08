import React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <Container fluid="md-3 bg-dark text-light">
      <Row>
        <Col>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/mon-compte/">DASHBOARD</Nav.Link>
            <Nav.Link href="/home">Voir le site</Nav.Link>

            <span>COMPTE</span>
            <Nav.Link href="/tatoueur/:uid">Ma fiche</Nav.Link>
            <Nav.Link href="/mon-compte/users/edit/">Modifier son compte</Nav.Link>
            <Nav.Link href="#">Deconnection</Nav.Link>
            <span>PICTURES</span>
            <Nav.Link href="/mon-compte/pictures/index">Toutes les images</Nav.Link>
            <Nav.Link href="/mon-compte/pictures/add">Ajouter une image</Nav.Link>
            <span>FLASHTATTOOS</span>
            <Nav.Link href="/mon-compte/flashtattoos/index">Tous les Flash</Nav.Link>
            <Nav.Link href="/mon-compte/flashtattoos/add">Ajouter un flash</Nav.Link>
            <span>TATTOOSHOPS</span>
            <Nav.Link href="/mon-compte/tattooshops/index">Tous les TattooShops</Nav.Link>
            <Nav.Link href="/mon-compte/tattooshops/add">Ajouter un TattooShop</Nav.Link>
            <span>ARTICLES</span>
            <Nav.Link href="/mon-compte/articles/index">Tous les Articles</Nav.Link>
            <Nav.Link href="/mon-compte/articles/add">Ajouter un Article</Nav.Link>

          </Nav>
          <div className="Mentions">
<p>Copyright :
Romain Maillet</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SideMenu;
