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
            <Nav.Link href="/admin/dashboard">DASHBOARD</Nav.Link>
            <Nav.Link href="/home">Voir le site</Nav.Link>

            <span>USERS</span>
            {/* <Nav.Link href="/admin/users/index">Tous les utilisateurs</Nav.Link>
            <Nav.Link href="/admin/users/create">Creer un utilisateur</Nav.Link> */}

            {/* <span>ARTICLES</span>
            <Nav.Link href="/admin/articles/index">Tous les articles</Nav.Link>
            <Nav.Link href="/admin/articles/create">Ajouter un article</Nav.Link>

            <span>CATEGORIES</span>

            <span>Types de categories</span>
            <Nav.Link href="/admin/termcategories/index">Tous les types de categories</Nav.Link>
            <Nav.Link href="/admin/termcategories/create">Ajouter un type de categorie</Nav.Link>

            <span>Categories</span>
            <Nav.Link href="/admin/categories/index">Toutes les categories</Nav.Link>
            <Nav.Link href="/admin/categories/create">Ajouter une categorie</Nav.Link> */}

            <span>COMPTE</span>
            <Nav.Link href="/admin/users/index">Compte</Nav.Link>
            <Nav.Link href="/admin/users/edit/:uid">Modifier son compte</Nav.Link>
            <Nav.Link href="#">Deconnection</Nav.Link>


          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default SideMenu;
