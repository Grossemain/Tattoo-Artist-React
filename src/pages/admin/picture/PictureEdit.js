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

const PictureEdit = () => {
  const { picture } = useParams();
  const navigate = useNavigate();
  const [PictureName, setPictureName] = useState("");
  const [PictureUserId, setPictureUserId] = useState("");
  const [PictureAlt, setPictureAlt] = useState("");
  const [PictureImage, setPictureImage] = useState("");
  const [validationError, setValidationError] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    getPicture();
  }, []);
  // GET - Récupère les valeurs de la fiche avec l'API

  const getPicture = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/pictures/${picture}`)
      .then((res) => {
        setPictureName(res.data.picture_name);
        setPictureAlt(res.data.alt);
        setPictureUserId(res.data.user_id);
        setPictureImage(res.data.image);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeHandler = (event) => {
    setPictureImage(event.target.files[0]);
  };
  //Fonction d'ajout de artstyle
  const updatePicture = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("picture_name", PictureName);
    // formData.append("user_id", PictureUserId);
    formData.append("alt", PictureAlt);
    if (PictureImage !== null) {
      formData.append("image", PictureImage);
    }
    await axios
      .post(`http://127.0.0.1:8000/api/pictures/${picture}`, formData,
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
          <h2 className="text-center mb-4"> Modifier une image</h2>
          <Form onSubmit={updatePicture}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom de l'image</Form.Label>
              <Form.Control
                type="text"
                placeholder="tatouage bras style japonais"
                name="picture_name"
                value={PictureName}
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
                value={PictureAlt}
                onChange={(event) => {
                  setPictureAlt(event.target.value);
                  }}
              />
            </Form.Group>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Télécharger des images</Form.Label>
                <Form.Control
                  type="file" multiple 
                  id="fileInput"
                  name="image"
                  // value={PictureImage}
                  onChange={changeHandler}
                />
                <img
                src={`http://127.0.0.1:8000/storage/uploads/${PictureImage}`}
                className="w-100"
                />
              </Form.Group>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Modifier les images
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PictureEdit;
