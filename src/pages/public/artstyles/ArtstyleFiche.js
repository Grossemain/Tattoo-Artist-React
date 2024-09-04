import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { artstyleService } from "../../../_services";
import { useParams } from "react-router-dom";

const ArtStyleFiche = () => {
  const [artstyle, setArtstyle] = useState({});
  let { asid } = useParams();

  // Récupération du artstyle depuis l'API
  useEffect(() => {
    artstyleService
      .getArtstyle(asid)
      .then((res) => setArtstyle(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  console.log("Artstyle:" + artstyle);
  return (
    <div className="Profil">
      <Container>
        <Row>
          <h1>{artstyle.name}</h1>
          <div className="separatorCenter">
            <span className="separator"></span>
          </div>
          <Col sm={4}>
            <img
              src={`http://127.0.0.1:8000/storage/uploads/${artstyle.img_style}`}
              alt={`${artstyle.name}`}
            />
          </Col>
          <Col sm={8}>
            <div className="Description">{artstyle.description}</div>
            <div className="Gallerie">
              {/* /creer un composant image list de Mui/ */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArtStyleFiche;
