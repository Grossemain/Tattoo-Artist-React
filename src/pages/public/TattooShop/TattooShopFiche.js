import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { userService, tattooshopService } from "../../../_services";
import { useParams } from "react-router-dom";
import TattooArtistGalleryList from "../../../components/public/Users/TattooArtistGalleryList";

const TattooShopFiche = () => {
  const [tattooShop, setTattooShop] = useState({});
  let { tsid } = useParams();

  // Récupération du tattooShop depuis l'API
  useEffect(() => {
    tattooshopService
      .getTattooShop(tsid)
      .then((res) => setTattooShop(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  console.log("TattooShop:" + tattooShop);

  return (
    <div className="Profil">
      <Container>
        <Row>
          <h1>{tattooShop.name}</h1>
          <div className="separatorCenter">
            <span className="separator"></span>
          </div>
          <Col sm={4}>
            <img
              src={`http://127.0.0.1:8000/storage/uploads/${tattooShop.img_tattooshop}`}
              alt={`${tattooShop.name}-${tattooShop.city}`}
            />
            <Row>
              <Col>
                <div className="ElementProfil">{tattooShop.city}</div>
              </Col>
              <Col>
                <div className="ElementProfil">{tattooShop.departement}</div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div className="ElementProfil">
                {tattooShop.adresse}
                </div>
              </Col>

            </Row>
          </Col>
          <Col sm={8}>
            <div className="Description">{tattooShop.meta_description}</div>
            <div className="Gallerie">
              <TattooArtistGalleryList className="galerie"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TattooShopFiche;
