import React from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

const TattooShopCard = ({ tattooshop }) => {
  console.log(tattooshop);
  return (
    <CardGroup>
      <Card className="card md-6">
        <Card.Img
          className="card-image"
          variant="top"
          src={`http://127.0.0.1:8000/storage/uploads/${tattooshop.img_tattooshop}`}
          alt={`${tattooshop.name}`}
        />
        <Card.Title className="card-title">
          <h2>{tattooshop.title}</h2>
        </Card.Title>
        <Card.Body className="card-content">
          <Card.Text>{tattooshop.meta_description}</Card.Text>
          <Card.Text>{tattooshop.adresse}</Card.Text>
          <Card.Text>{tattooshop.city}</Card.Text>
          <Card.Text>{tattooshop.departement}</Card.Text>
        </Card.Body>
        <Row className="card-button">
          <Link
            className="text-light text-decoration-none"
            to={`/galerie/${tattooshop.tattooshop_id}`}
          >
            {tattooshop.name}
          </Link>
        </Row>
      </Card>
    </CardGroup>
  );
};
export default TattooShopCard;
