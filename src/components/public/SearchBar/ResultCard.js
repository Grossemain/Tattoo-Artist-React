import React from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";


const ResultCard = ({ user }) => {
  return (
<CardGroup>
      <Card className="card md-6">
        <Card.Img
          className="card-image"
          variant="top"
          src={`https://api.le-tatouage.fr/storage/uploads/${user.img_profil}`}
          alt={`${user.pseudo_user}-${user.city}`}
        />
        <Card.Title className="card-title">
          <h2>{user.pseudo_user}</h2>
        </Card.Title>
        <Card.Body className="card-content">
          <Row>
            <Col className="colonne">
              <span className="cell">{user.city}</span>
            </Col>
            <Col className="colonne">
              <span className="cell">{user.departement}</span>
            </Col>
            <Col className="colonne">
              <span className="cell">{user.departement}</span>
            </Col>
          </Row>
        </Card.Body>
        <Row className="card-button">
          <Link
            className="text-light text-decoration-none"
            to={`/tatoueur/${user.user_id}`}
          >
            {user.pseudo_user}
          </Link>
        </Row>
      </Card>
    </CardGroup>
  );
};
export default ResultCard;
