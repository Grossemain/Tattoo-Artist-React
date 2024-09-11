import React from "react";
import { Card, Button, CardGroup, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  console.log(article);

  return (
    <CardGroup>
      <Card className="card md-6">
        <Card.Img
          className="card-image"
          variant="top"
          src={`http://127.0.0.1:8000/storage/uploads/${article.img}`}
          alt={`${article.title}`}
        />
        <Card.Title className="card-title">
          <h2>{article.title}</h2>
        </Card.Title>
        <Card.Body className="card-content">
          <Card.Text>{article.content}</Card.Text>
        </Card.Body>
        <Row className="card-button">
          <Link
            className="text-light text-decoration-none"
            to={`/articles/${article.article_id}`}
          >
            {article.title}
          </Link>
        </Row>
      </Card>
    </CardGroup>
  );
};
export default ArticleCard;