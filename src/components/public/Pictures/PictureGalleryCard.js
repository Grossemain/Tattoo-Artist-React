import React from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

const PictureGalleryCard = ({ picture }) => {
  return (
    <CardGroup>
      <Card className="card md-6">
        <Link
          className="text-light text-decoration-none"
          to={`/galerie/${picture.picture_id}`}
        >
          <Card.Img
            className="card-image"
            variant="top"
            src={`https://api.le-tatouage.fr/storage/uploads/${picture.image}`}
            alt={`${picture.alt}`}
          />
        </Link>
      </Card>
    </CardGroup>
  );
};
export default PictureGalleryCard;
