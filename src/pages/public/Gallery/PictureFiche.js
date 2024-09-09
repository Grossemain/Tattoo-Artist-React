import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { pictureService } from "../../../_services";
import { useParams } from "react-router-dom";

const PictureFiche = () => {
  const [picture, setPicture] = useState({});
  let { pid } = useParams();

  // Récupération du picture depuis l'API
  useEffect(() => {
    pictureService
      .getPicture(pid)
      .then((res) => setPicture(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  console.log("Picture:" + picture);
  return (
    <div className="Profil">
      <Container>
        <Row>
          <h1>{picture.picture_name}</h1>
          <div className="separatorCenter">
            <span className="separator"></span>
          </div>
          <Col sm={4}>
            <img
              src={`http://127.0.0.1:8000/storage/uploads/${picture.image}`}
              alt={`${picture.alt}`}
            />
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default PictureFiche;
