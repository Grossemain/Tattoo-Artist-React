import React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <Container fluid="full-height-container bg-dark text-light">
      <Row>
        <Col>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link className="a-nav-link" href="/admin/dashboard">DASHBOARD</Nav.Link>
            <Nav.Link href="/home">Voir le site</Nav.Link>

            <span>USERS</span>


            <span>COMPTE</span>
            <Nav.Link className="a-nav-link" href="/admin/users/index">Comptes</Nav.Link>
            <Nav.Link className="a-nav-link" href="/admin/users/edit/">Modifier son compte</Nav.Link>
            <Nav.Link className="a-nav-link" href="/admin/users/add">Creer un compte</Nav.Link>
            <Nav.Link className="a-nav-link" href="#">Deconnection</Nav.Link>
            <span>ARTSTYLES</span>
            <Nav.Link className="a-nav-link" href="/admin/styles/index">Tous les Styles</Nav.Link>
            <Nav.Link className="a-nav-link" href="/admin/styles/add">Ajouter un Styles</Nav.Link>
            <span>PICTURES</span>
            <Nav.Link className="a-nav-link" href="/admin/pictures/index">Toutes les images</Nav.Link>
            <Nav.Link className="a-nav-link" href="/admin/pictures/add">Ajouter une image</Nav.Link>
            <span>FLASHTATTOOS</span>
            <Nav.Link className="a-nav-link" href="/admin/flashtattoos/index">Tous les Flash</Nav.Link>
            <Nav.Link className="a-nav-link" href="/admin/flashtattoos/add">Ajouter un flash</Nav.Link>
            <span>TATTOOSHOPS</span>
            <Nav.Link className="a-nav-link" href="/admin/tattooshops/index">Tous les TattooShops</Nav.Link>
            <Nav.Link className="a-nav-link" href="/admin/tattooshops/add">Ajouter un TattooShop</Nav.Link>
            <span>ARTICLES</span>
            <Nav.Link className="a-nav-link" href="/admin/articles/index">Tous les Articles</Nav.Link>
            <Nav.Link className="a-nav-link" href="/admin/articles/add">Ajouter un Article</Nav.Link>

          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default SideMenu;
