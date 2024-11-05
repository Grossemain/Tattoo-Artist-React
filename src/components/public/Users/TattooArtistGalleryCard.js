import React from "react";
import { Card, Button, CardGroup, Row, Col, Container } from "react-bootstrap/";
import { Link } from "react-router-dom";

const TattooArtistGalleryCard = ({ user }) => {
  return (
    <CardGroup>
      <Card className="card md-6">
        <Link
          className="text-light text-decoration-none"
          to={`/tatoueur/${user.user_id}`}
        >
          <Card.Img
            className="card-image"
            variant="top"
            src={`https://api.le-tatouage.fr/storage/uploads/${user.img_profil}`}
            alt={`${user.pseudo_user}-${user.city}`}
          />
          <Row className="card-button">
            <Col>{user.pseudo_user}</Col>
          </Row>
        </Link>
      </Card>
    </CardGroup>
  );
};
export default TattooArtistGalleryCard;
