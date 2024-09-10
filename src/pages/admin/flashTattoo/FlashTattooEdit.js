import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import axios from "axios";

const FlashTattooEdit = () => {
  const { flashTattoo } = useParams();
  const navigate = useNavigate();
  const [FlashTattooTitle, setFlashTattooTitle] = useState("");
  const [FlashTattooUserId, setFlashTattooUserId] = useState("");
  const [FlashTattooH1, setFlashTattooH1] = useState("");
  const [FlashTattooContent, setFlashTattooContent] = useState("");
  const [FlashTattooImage, setFlashTattooImage] = useState("");
  const [FlashTattooDispo, setFlashTattooDispo] = useState("");
  const [checked, setChecked] = useState(false);
  const [validationError, setValidationError] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    getFlashTattoo();
  }, []);
  // GET - Récupère les valeurs de la fiche avec l'API

  const getFlashTattoo = async () => {
    console.log('flashTattoo:',flashTattoo)
    await axios
      .get(`http://127.0.0.1:8000/api/flashtattoos/${flashTattoo}`)
      .then((res) => {
        setFlashTattooTitle(res.data.title);
        setFlashTattooH1(res.data.h1_title);
        setFlashTattooContent(res.data.content);
        setFlashTattooDispo(res.data.disponibility);
        setFlashTattooUserId(res.data.user_id);
        setFlashTattooImage(res.data.img_flashtattoo);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeHandler = (event) => {
    setFlashTattooImage(event.target.files[0]);
  };
  //Fonction d'ajout de artstyle
  const updateFlashTattoo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PUT");
    const FlashTattooDispo = checked? 1:0;
    formData.append("user_id", FlashTattooUserId);
    formData.append("title", FlashTattooTitle);
    formData.append("h1_title", FlashTattooH1);
    formData.append("content", FlashTattooContent);
    formData.append("disponibility", FlashTattooDispo);
    formData.append("img_flashtattoo", FlashTattooImage);
    if (FlashTattooImage !== null) {
      formData.append("img_flashtattoo", FlashTattooImage);
    }
    await axios
      .post(`http://127.0.0.1:8000/api/flashtattoos/${flashTattoo}`, formData,
        {
          headers: {
          Authorization :`Bearer ${token}`
        }
      }
      )
      .then(navigate("/admin/"))
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
          <h2 className="text-center mb-4"> Modifier un flash</h2>
          <Form onSubmit={updateFlashTattoo}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom du flash</Form.Label>
              <Form.Control
                type="text"
                placeholder="ange et demon"
                name="title"
                value={FlashTattooTitle}
                onChange={(event) => {
                  setFlashTattooTitle(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Titre du Flash</Form.Label>
              <Form.Control
                type="text"
                placeholder="ange et demon"
                name="h1_title"
                value={FlashTattooH1}
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
                    value={FlashTattooContent}

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
                value={FlashTattooDispo}
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
                <img
                src={`http://127.0.0.1:8000/storage/uploads/${FlashTattooImage}`}
                className="w-100"
                />
              </Form.Group>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Modifier le flash
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FlashTattooEdit;
