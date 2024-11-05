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

const ArtStyleCreate = () => {
  const navigate = useNavigate();
  const [ArtstyleName, setArtstyleName] = useState("");
  const [ArtstyleDescription, setArtstyleDescription] = useState("");
  const [ArtstyleImage, setArtstyleImage] = useState("");
  const [validationError, setValidationError] = useState({});
  const changeHandler = (event) => {
    setArtstyleImage(event.target.files[0]);
  };
  //Fonction d'ajout de artstyle
  const ArtStyleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", ArtstyleName);
    formData.append("description", ArtstyleDescription);
    formData.append("img_style", ArtstyleImage);

    await axios
      .post(`https://api.le-tatouage.fr/api/artstyles`, formData)
      .then(navigate("/admin"))
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
          <h2 className="text-center mb-4"> Ajout d'un nouveau Artstyle</h2>
          <Form onSubmit={ArtStyleAdd}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom du style</Form.Label>
              <Form.Control
                type="text"
                placeholder="exemple :New School"
                name="name"
                onChange={(event) => {
                  setArtstyleName(event.target.value);
                  }}
              />
              <Form.Text className="text-muted">
                Vérifier que le style n'existe pas déjà
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                  name="description"
                  onChange={(event) => {
                    setArtstyleDescription(event.target.value);
                    }}
                  as="textarea"
                  placeholder="décrire le style, son histoire..."
                  style={{ height: "250px" }}
                />
              </FloatingLabel>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Télécharger une image</Form.Label>
                <Form.Control
                  type="file"
                  id="fileInput"
                  name="img_style"
                  onChange={changeHandler}
                />
              </Form.Group>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Créer le style
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ArtStyleCreate;
