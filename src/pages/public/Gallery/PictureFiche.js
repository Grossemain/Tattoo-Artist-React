import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { userService, pictureService } from "../../../_services";
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
          <Col sm={10}>
            <img
              src={`https://api.le-tatouage.fr/storage/uploads/${picture.image}`}
              alt={`${picture.alt}`}
            />
          </Col>
          <Col sm={2}>
            {picture.user && (
              <div className="ElementProfil">{picture.user.pseudo_user}</div>
            )}
            {picture.user && (
              <div className="ElementProfil">{picture.user.city} </div>
            )}
                        {picture.user && (
              <div className="ElementProfil">{picture.user.departement} </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PictureFiche;
