import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { userService, flashtattooService } from "../../../_services";
import { useParams } from "react-router-dom";

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
          <Col sm={4}>
            <img
              src={`http://127.0.0.1:8000/storage/uploads/${flashTattoo.img_flashtattoo}`}
              alt={`${flashTattoo.title}`}
            />
          </Col>
          <Col sm={8}>
          <div className="Description">{flashTattoo.content}</div>
            <div className="Gallerie">
              {/* /creer un composant image list de Mui/ */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlashFiche;
