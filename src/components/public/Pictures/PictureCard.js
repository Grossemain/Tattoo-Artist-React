import React from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

const PictureCard = ({ picture }) => {
  return (
    <CardGroup>
      <Card className="card md-6">
        <Card.Img
          className="card-image"
          variant="top"
          src={`http://127.0.0.1:8000/storage/uploads/${picture.image}`}
          alt={`${picture.alt}`}
        />
        <Card.Title className="card-title">
          <h2>{picture.picture_name}</h2>
        </Card.Title>
        <Card.Title className="card-title">
          <h3>{picture.user.pseudo_user}</h3>
        </Card.Title>
        <Row className="card-button">
          <Link
            className="text-light text-decoration-none"
            to={`/galerie/${picture.picture_id}`}
          >
            {picture.picture_name}
          </Link>
        </Row>
      </Card>
    </CardGroup>
  );
};
export default PictureCard;
