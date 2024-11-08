import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { userService, flashtattooService } from "../../../_services";
import { useParams, Link } from "react-router-dom";

const FlashFiche = () => {
  const [flashTattoo, setFlashTattoo] = useState({});
  let { ftid } = useParams();

  // Récupération du flashTattoo depuis l'API
  useEffect(() => {
    flashtattooService
      .getFlashTattoo(ftid)
      .then((res) => setFlashTattoo(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  console.log("FlashTattoo:" + flashTattoo);

  return (
    <div className="Profil">
      <Container>
        <Row>
          <h1>{flashTattoo.h1_title}</h1>
          <div className="separatorCenter">
            <span className="separator"></span>
          </div>
          <Col sm={8}>
            <img
              src={`https://api.le-tatouage.fr/storage/uploads/${flashTattoo.img_flashtattoo}`}
              alt={`${flashTattoo.title}`}
            />
          </Col>
          <Col sm={4}>
          <div className="Description">{flashTattoo.content}</div>
          {flashTattoo.user && (
              <div className="ElementProfil">{flashTattoo.user.pseudo_user}</div>
            )}
            {flashTattoo.user && (
              <div className="ElementProfil">{flashTattoo.user.city} </div>
            )}
            {flashTattoo.user && (
              <div className="ElementProfil">{flashTattoo.user.departement} </div>
            )}
            <Button className="bouton-retour w-100">
              <Link
                className="text-light text-decoration-none"
                to={`/flash/`}
              >
                Retour
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlashFiche;
