import React from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

const FlashTattooCard = ({ flashtattoo }) => {
  console.log(flashtattoo);
  return (
    <CardGroup>
      <Card className="card md-6">
        <Card.Img
          className="card-image"
          variant="top"
          src={`http://127.0.0.1:8000/storage/uploads/${flashtattoo.img_flashtattoo}`}
          alt={`${flashtattoo.title}`}
        />
        <Card.Title className="card-title">
          <h2>{flashtattoo.title}</h2>
        </Card.Title>
        <Card.Body className="card-content">
          <Card.Text>{flashtattoo.content}</Card.Text>
        </Card.Body>
        <Row className="card-button">
          <Link
            className="text-light text-decoration-none"
            to={`/galerie/${flashtattoo.flashtattoo_id}`}
          >
            {flashtattoo.title}
          </Link>
        </Row>
      </Card>
    </CardGroup>
  );
};
export default FlashTattooCard;
