import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { userService, articleService } from "../../../_services";
import { useParams } from "react-router-dom";
import TattooArtistGalleryList from "../../../components/public/Users/TattooArtistGalleryList";

const ArticleFiche = () => {
  const [article, setArticle] = useState({});
  let { aid } = useParams();

  // Récupération du article depuis l'API
  useEffect(() => {
    articleService
      .getArticle(aid)
      .then((res) => setArticle(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  console.log("Article:" + article);

  return (
    <div className="Profil">
      <Container>
        <Row>
          <h1>{article.title}</h1>
          <div className="separatorCenter">
            <span className="separator"></span>
          </div>
          <Col sm={4}>
            <img
              src={`http://127.0.0.1:8000/storage/uploads/${article.img}`}
              alt={`${article.title}`}
            />
            <Row>
              <Col>
                <div className="ElementProfil">{article.tattooshop_id }</div>
              </Col>
              <Col>
                <div className="ElementProfil">{article.created_at}</div>
              </Col>
            </Row>
          </Col>
          <Col sm={8}>
            <div className="Description">{article.content}</div>
            {/* <div className="Gallerie">
              <TattooArtistGalleryList className="galerie"/>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArticleFiche;
