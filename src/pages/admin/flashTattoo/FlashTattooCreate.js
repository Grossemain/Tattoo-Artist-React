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

const FlashTattooCreate = () => {
  const navigate = useNavigate();
  const [FlashFlashTattooTitle, setFlashFlashTattooTitle] = useState("");
  const [FlashTattooUserId, setFlashTattooUserId] = useState("");
  const [FlashTattooH1, setFlashTattooH1] = useState("");
  const [FlashTattooContent, setFlashTattooContent] = useState("");
  const [FlashTattooImage, setFlashTattooImage] = useState("");
  const [FlashTattooDispo, setFlashTattooDispo] = useState("");
  const [checked, setChecked] = useState(false);
  const [validationError, setValidationError] = useState({});
  const token = localStorage.getItem("token");

  const changeHandler = (event) => {
    setFlashTattooImage(event.target.files[0]);
  };
  //Fonction d'ajout de club
  const FlashTattooAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    //Variable qui transforme false et true en 0 ou 1
    const FlashTattooDispo = checked? 1:0;
    formData.append("user_id", FlashTattooUserId);
    formData.append("title", FlashFlashTattooTitle);
    formData.append("h1_title", FlashTattooH1);
    formData.append("content", FlashTattooContent);
    formData.append("disponibility", FlashTattooDispo);
    formData.append("img_flashtattoo", FlashTattooImage);

    await axios
      .post(`http://127.0.0.1:8000/api/flashtattoos`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
          <h2 className="text-center mb-4"> Ajout de nouveaux flashs</h2>
          <Form onSubmit={FlashTattooAdd}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom du flash</Form.Label>
              <Form.Control
                type="text"
                placeholder="ange et demon"
                name="title"
                onChange={(event) => {
                  setFlashFlashTattooTitle(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Titre du Flash</Form.Label>
              <Form.Control
                type="text"
                placeholder="ange et demon"
                name="h1_title"
                onChange={(event) => {
                  setFlashTattooH1(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description de l'image</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Description"
                >
                  <Form.Control
                    name="content"
                    onChange={(event) => {
                      setFlashTattooContent(event.target.value);
                    }}
                    as="textarea"
                    placeholder="décrire les possibilité de taille, emplacements..."
                    style={{ height: "250px" }}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="dispo oui ou non ?"
                name="disponibility"
                onChange={(event) => {
                  // Mettre à jour l'état avec la valeur booléenne
                  setChecked(event.target.checked);
                }}
              />
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Télécharger des images</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  id="fileInput"
                  name="img_flashtattoo"
                  onChange={changeHandler}
                />
              </Form.Group>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Créer les flash
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FlashTattooCreate;
