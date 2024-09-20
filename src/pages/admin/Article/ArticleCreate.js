import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  FloatingLabel,
  InputGroup,
} from "react-bootstrap";
import axios from "axios";

const ArticleCreate = () => {
  const navigate = useNavigate();
  const [ArticleTitle, setArticleTitle] = useState("");
  const [ArticleContent, setArticleContent] = useState("");
  const [ArticleImage, setArticleImage] = useState("");


  const [validationError, setValidationError] = useState({});
  const [formData, setFormData] = useState({});
  const handleFormData = (data) => {
    setFormData(data);
    console.log(formData);
  };
  const token = localStorage.getItem("token");

  const changeHandler = (event) => {
    setArticleImage(event.target.files[0]);
  };

  
  //Fonction d'ajout de club
  const ArticleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", ArticleTitle);
    formData.append("content", ArticleContent);
    formData.append("img", ArticleImage);

    await axios
      .post(`http://127.0.0.1:8000/api/articles`, formData, {
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
          <h2 className="text-center mb-4"> Ajout d'un Article</h2>
          <Form onSubmit={ArticleAdd}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Titre de l'article</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nouveau guest, ou evenement"
                name="title"
                onChange={(event) => {
                  setArticleTitle(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contenu de l'article</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel controlId="floatingTextarea2" label="adresse">
                  <Form.Control
                    name="content"
                    onChange={(event) => {
                      setArticleContent(event.target.value);
                    }}
                    as="textarea"
                    placeholder="adresse complète "
                    style={{ height: "500px" }}
                  />
                </FloatingLabel>
              </Form.Group>
            </Form.Group>

              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Télécharger la photo de l'article</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  id="fileInput"
                  name="img"
                  onChange={changeHandler}
                />
              </Form.Group>


            <Button variant="primary" type="submit" className="w-100">
              Créer l'article
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleCreate;
