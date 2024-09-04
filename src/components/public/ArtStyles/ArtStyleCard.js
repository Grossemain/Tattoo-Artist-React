import React from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

const ArtStyleCard = ({ artstyle }) => {
  return (
    <CardGroup>
      <Card className="card md-6">
        <Card.Img
          className="card-image"
          variant="top"
          src={`http://127.0.0.1:8000/storage/uploads/${artstyle.img_style}`}
          alt={`${artstyle.name}`}
        />
        <Card.Title className="card-title">
          <h2>{artstyle.name}</h2>
        </Card.Title>
        <Card.Body className="card-content">
          <Card.Text>{artstyle.description}</Card.Text>
        </Card.Body>
        <Row className="card-button">
          <Link
            className="text-light text-decoration-none"
            to={`/styles/${artstyle.artstyle_id}`}
          >
            {artstyle.name}
          </Link>
        </Row>
      </Card>
    </CardGroup>
  );
};
export default ArtStyleCard;
