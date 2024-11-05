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
          src={`https://api.le-tatouage.fr/storage/uploads/${flashtattoo.img_flashtattoo}`}
          alt={`${flashtattoo.title}`}
        />
        <Card.Title className="card-title">
          <h2>{flashtattoo.title}</h2>
        </Card.Title>
        <Card.Title className="card-title">
          <h3>{flashtattoo.user.pseudo_user}</h3>
        </Card.Title>
        <Card.Body className="card-content">
          <Card.Text>
            {flashtattoo.content.length > 200
              ? `${flashtattoo.content.substring(0, 200)}...`
              : flashtattoo.content}
          </Card.Text>
        </Card.Body>
        <Row className="card-button">
          <Link
            className="text-light text-decoration-none"
            to={`/flash/${flashtattoo.flashtattoo_id}`}
          >
            {flashtattoo.title}
          </Link>
        </Row>
      </Card>
    </CardGroup>
  );
};
export default FlashTattooCard;
