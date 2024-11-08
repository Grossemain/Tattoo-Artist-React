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

const TattooShopEdit = () => {
  const navigate = useNavigate();
  const { tattooShop } = useParams();
  const [TattooShopName, setTattooShopName] = useState("");
  const [TattooShopAdresse, setTattooShopAdresse] = useState("");
  const [TattooShopCity, setTattooShopCity] = useState("");
  const [TattooShopImage, setTattooShopImage] = useState("");
  const [TattooShopDepartement, setTattooShopDepartement] = useState("");
  const [TattooShopDescription, setTattooShopDescription] = useState("");
  // const [TattooShopTitle, setTattooShopTitle] = useState("");

  const [validationError, setValidationError] = useState({});
  const [formData, setFormData] = useState({});
  const handleFormData = (data) => {
    setFormData(data);
    console.log(formData);
  };
  const token = localStorage.getItem("token");

  useEffect(() => {
    getTattooShop();
  }, []);
  // GET - Récupère les valeurs de la fiche avec l'API

  const getTattooShop = async () => {
    console.log('tattooShop:',tattooShop);
    await axios
      .get(`https://api.le-tatouage.fr/api/tattooshops/${tattooShop}`)
      .then((res) => {
        setTattooShopName(res.data.name);
        setTattooShopAdresse(res.data.adresse);
        setTattooShopCity(res.data.city);
        setTattooShopDepartement(res.data.departement);
        setTattooShopImage(res.data.img_tattooshop);
        setTattooShopDescription(res.data.meta_description);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeHandler = (event) => {
    setTattooShopImage(event.target.files[0]);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [submitSearch, setSubmitSearch] = useState(""); // Nouvelle variable d'état

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleChangeCity = (event) => {
    setTattooShopCity(event.target.value);
    console.log("TattooShopCity" + TattooShopCity);
  };

  const handleChangeDepartement = (event) => {
    setTattooShopDepartement(event.target.value);
    console.log("TattooShopDepartement" + TattooShopDepartement);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setHasSearched(true);
    setSubmitSearch(searchQuery); // Mettre à jour submitSearch avec la valeur de searchQuery

    const apiUrl = `https://geo.api.gouv.fr/communes?codePostal=${searchQuery}&fields=nom,departement`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("test", data);
      setResults(data);
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
    }
  };

  //Fonction de modification du tattooShop
  const updateTattooShop = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", TattooShopName);
    formData.append("adresse", TattooShopAdresse);
    formData.append("city", TattooShopCity);
    formData.append("departement", TattooShopDepartement);
    formData.append("meta_description", TattooShopDescription);
    formData.append("img_tattooshop", TattooShopImage);
    if (TattooShopImage !== null) {
      formData.append("img_tattooshop", TattooShopImage);
    }
    await axios
      .post(`https://api.le-tatouage.fr/api/tattooshops/${tattooShop}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(navigate("/mon-compte/"))
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
          <h2 className="text-center mb-4"> Modifier Tattoo Shop</h2>
          <Form onSubmit={updateTattooShop}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom du Shop</Form.Label>
              <Form.Control
                type="text"
                placeholder="ange et demon tattoo"
                name="name"
                value={TattooShopName}
                onChange={(event) => {
                  setTattooShopName(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse du shop</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel controlId="floatingTextarea2" label="adresse">
                  <Form.Control
                    name="adresse"
                    value={TattooShopAdresse}
                    onChange={(event) => {
                      setTattooShopAdresse(event.target.value);
                    }}
                    as="textarea"
                    placeholder="adresse complète "
                    style={{ height: "250px" }}
                  />
                </FloatingLabel>
              </Form.Group>
            </Form.Group>

            <div className="group">
              <Container>
                <Form>
                  <Row>
                    <Form.Label className="labelForm">Localisation</Form.Label>
                    <Col>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Entre ton code postal"
                          value={searchQuery}
                          onChange={handleInputChange}
                        />
                        <Button type="button" onClick={handleFormSubmit}>
                          Rechercher
                        </Button>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form>

                {hasSearched && (
                  <Form.Group as={Row} className="mt-3">
                    <Col>
                      <Form.Label className="labelForm">La ville</Form.Label>
                      <Form.Control
                        as="select"
                        name="city"
                        value={TattooShopCity}
                        onChange={handleChangeCity}
                      >
                        <option value="">Sélectionner un élément</option>
                        {results.map((result, index) => (
                          <option key={index} value={result.nom}>
                            {result.nom}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Label className="labelForm">
                        Le département
                      </Form.Label>

                      <Form.Control
                        as="select"
                        name="departement"
                        value={TattooShopDepartement}
                        onChange={handleChangeDepartement}
                      >
                        <option value="">Sélectionner un élément</option>
                        {results.map((result, index) => (
                          <option key={index} value={result.departement.nom}>
                            {result.departement.nom}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Form.Group>
                )}
              </Container>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description du shop</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Description"
                >
                  <Form.Control
                    name="meta_description"
                    value={TattooShopDescription}
                    onChange={(event) => {
                      setTattooShopDescription(event.target.value);
                    }}
                    as="textarea"
                    placeholder="décrire le shop"
                    style={{ height: "250px" }}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Télécharger une photo du shop</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  id="fileInput"
                  name="img_flashtattoo"
                  onChange={changeHandler}
                />
                <img
                  src={`https://api.le-tatouage.fr/storage/uploads/${TattooShopImage}`}
                  className="w-100"
                />
              </Form.Group>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Modifier le Shop
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TattooShopEdit;
