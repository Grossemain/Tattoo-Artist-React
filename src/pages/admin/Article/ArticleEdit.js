import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const ArticleEdit = () => {
  const { article } = useParams();
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

  useEffect(() => {
    getArticle();
  }, []);
  // GET - Récupère les valeurs de la fiche avec l'API

  const getArticle = async () => {
    console.log('article:', article);
    await axios
      .get(`https://api.le-tatouage.fr/api/articles/${article}`)
      .then((res) => {
        setArticleTitle(res.data.title);
        setArticleContent(res.data.content);
        setArticleImage(res.data.img);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeHandler = (event) => {
    setArticleImage(event.target.files[0]);
  };

  //Fonction de modification de l'article
  const updateArticle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", ArticleTitle);
    formData.append("content", ArticleContent);
    formData.append("img", ArticleImage);

    if (ArticleImage !== null) {
      formData.append("img", ArticleImage);
    }
    await axios
      .post(`https://api.le-tatouage.fr/api/articles/${article}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
          <h2 className="text-center mb-4"> Modification d'un Article</h2>
          <Form onSubmit={updateArticle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Titre de l'article</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nouveau guest, ou evenement"
                name="title"
                value={ArticleTitle}
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
                    value={ArticleContent}
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
                <img
                src={`https://api.le-tatouage.fr/storage/uploads/${ArticleImage}`}
                className="w-100"
                />
              </Form.Group>


            <Button variant="primary" type="submit" className="w-100">
              Modifier l'article
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleEdit;
