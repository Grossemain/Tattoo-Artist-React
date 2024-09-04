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

const ArtstyleEdit = () => {
  const { artstyle } = useParams();
  const navigate = useNavigate();
  const [ArtstyleName, setArtstyleName] = useState("");
  const [ArtstyleDescription, setArtstyleDescription] = useState("");
  const [ArtstyleImage, setArtstyleImage] = useState("");
  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    getArtstyle();
  }, []);
  // GET - Récupère les valeurs de la fiche avec l'API

  const getArtstyle = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/artstyles/${artstyle}`)
      .then((res) => {
        setArtstyleName(res.data.name);
        setArtstyleDescription(res.data.description);
        setArtstyleImage(res.data.img_style);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeHandler = (event) => {
    setArtstyleImage(event.target.files[0]);
  };
  //Fonction d'ajout de artsyle
  const updateArtstyle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("name", ArtstyleName);
    formData.append("description", ArtstyleDescription);
    if (ArtstyleImage !== null) {
      formData.append("img_style", ArtstyleImage);
    }
    await axios
      .post(`http://127.0.0.1:8000/api/artstyles/${artstyle}`, formData)
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
          <h2 className="text-center mb-4"> Modifier le Artstyle</h2>
          <Form onSubmit={updateArtstyle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom du style</Form.Label>
              <Form.Control
                type="text"
                placeholder="exemple :New School"
                name="name"
                value={ArtstyleName}
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
                  value={ArtstyleDescription}
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
                /><img
                src={`http://127.0.0.1:8000/storage/uploads/${artstyle.img_style}`}
              />
              </Form.Group>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Mettre à jour le style
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ArtstyleEdit;
