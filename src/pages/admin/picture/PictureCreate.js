import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import axios from "axios";


const PictureCreate = () => {
  const navigate = useNavigate();
  const [PictureName, setPictureName] = useState("");
  const [PictureUserId, setPictureUserId] = useState("");
  const [PictureAlt, setPictureAlt] = useState("");
  const [PictureImage, setPictureImage] = useState("");
  const [validationError, setValidationError] = useState({});
  const changeHandler = (event) => {
    setPictureImage(event.target.files[0]);
  };
  //Fonction d'ajout de club
  const PictureAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", PictureUserId);
    formData.append("picture_name", PictureName);
    formData.append("alt", PictureAlt);
    formData.append("image", PictureImage);

    await axios
      .post(`http://127.0.0.1:8000/api/pictures`, formData)
      .then(navigate("/home"))
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4"> Ajout de nouvelles images</h2>
          <Form onSubmit={PictureAdd}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom de l'auteur</Form.Label>
              <Form.Control
                type="text"
                placeholder="id"
                name="user_id"
                onChange={(event) => {
                  setPictureUserId(event.target.value);
                  }}
              />
              {/* <Form.Text className="text-muted">
                Vérifier que le style n'existe pas déjà
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom de l'image</Form.Label>
              <Form.Control
                type="text"
                placeholder="tatouage bras style japonais"
                name="picture_name"
                onChange={(event) => {
                  setPictureName(event.target.value);
                  }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputGroup-sizing-default">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description de l'image</Form.Label>
              <Form.Control
                type="text"
                placeholder="petite description de l'image"
                name="alt"
                onChange={(event) => {
                  setPictureAlt(event.target.value);
                  }}
              />
              {/* <Form.Text className="text-muted">
                Vérifier que le style n'existe pas déjà
              </Form.Text> */}
            </Form.Group>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Télécharger des images</Form.Label>
                <Form.Control
                  type="file" multiple 
                  id="fileInput"
                  name="image"
                  onChange={changeHandler}
                />
              </Form.Group>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Créer les images
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PictureCreate;
