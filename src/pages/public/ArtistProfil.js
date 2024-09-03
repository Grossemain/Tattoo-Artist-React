import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { userService } from "../../_services";
import { useParams } from "react-router-dom";

const ArtistProfil = () => {
  const [artist, setArtist] = useState({});
  let { uid } = useParams();

  // Récupération du user depuis l'API
  useEffect(() => {
    userService
      .getUser(uid)
      .then((res) => setArtist(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  console.log("Artist:" + artist);
  return (
    <div className="Profil">
      <Container>
        <Row>
          <h1>{artist.pseudo_user}</h1>
          <div className="separatorCenter">
            <span className="separator"></span>
          </div>
          <Col sm={4}>
            <img
              src={`http://127.0.0.1:8000/storage/uploads/${artist.img_profil}`}
              alt={`${artist.pseudo_user}-${artist.city}`}
            />
            <Row>
              <Col>
                <div className="ElementProfil">{artist.city}</div>
              </Col>
              <Col>
                <div className="ElementProfil">{artist.departement}</div>
              </Col>
            </Row>
            <Row>
                <Col><div  className="ElementProfil"><a href={`${artist.instagram}`}>Instagram</a></div></Col>
            </Row>
            <Row>
            <Col><div className="ElementProfil"><a href={`tel:${artist.tel}`}>Appeler</a></div></Col>
            <Col><div className="ElementProfil"><a href={`mailto:${artist.email_contact}`}>Contact</a></div></Col>
            </Row>
          </Col>
          <Col sm={8}>
            <div className="Description">{artist.description}</div>
            <div className="Gallerie">
{/* /creer un composant image list de Mui/ */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArtistProfil;
