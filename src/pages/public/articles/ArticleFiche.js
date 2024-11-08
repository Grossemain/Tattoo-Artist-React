import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { articleService } from "../../../_services";
import { useParams, Link } from "react-router-dom";
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

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  console.log("Article:", article);

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
              src={`https://api.le-tatouage.fr/storage/uploads/${article.img}`}
              alt={`${article.title}`}
            />
            <Row>
              {/* <Col>
                <div className="ElementProfil">{article.tattooshop_id}</div>
              </Col> */}
              <Col>
                <div className="ElementProfil">{formatDate(article.created_at)}</div>
              </Col>
            </Row>
            <Button className="bouton-retour w-100">
              <Link
                className="text-light text-decoration-none"
                to={`/articles/`}
              >
                Retour
              </Link>
            </Button>
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
