import {
  Container,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

// import ArtStyleForm from "./ArtStyleForm";

const RegisterForm = () => {
  let navigate = useNavigate();
  const [pseudo_user, setPseudoUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [email_contact, setEmailContact] = useState([]);
  const [tel, setTel] = useState([]);
  const [city, setCity] = useState([]);
  const [departement, setDepartement] = useState([]);
  const [instagram, setInstagram] = useState([]);
  const [description, setDescription] = useState([]);
  const [artstyles, setArtStyles] = useState([]);
  const [img_profil, setImgProfil] = useState("");
  const [validationError, setValidationError] = useState({});
  const [formData, setFormData] = useState({});
  const handleFormData = (data) => {
    setFormData(data);
    console.log(formData);
  };

  //On appel les ArtStyles
  // Fetch places (artsyles) from API
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/artstyles")
      .then((response) => {
        setArtStyles(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  const changeHandler = (event) => {
    setImgProfil(event.target.files[0]);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
      console.log(value);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  //On converti en formData toutes les données
  // Gestion de la soumission du formulaire
  const addProfil = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(checkedItems);
    formData.append("pseudo_user", pseudo_user);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("email_contact", email_contact);
    formData.append("tel", tel);
    formData.append("city", city);
    formData.append("departement", departement);
    formData.append("instagram", instagram);
    formData.append("description", description);
    formData.append("img_profil", img_profil);
    checkedItems.forEach((element, index) => {
      formData.append(`artstyle_id[]`, element);
    });

    await axios
      .post(`http://127.0.0.1:8000/api/register`, formData)
      .then(navigate("../merci"))
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        }
      });
  };
  //logique pour la recherche de ville + departement avec formulaire
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [submitSearch, setSubmitSearch] = useState(""); // Nouvelle variable d'état

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
    console.log("city" + city);
  };

  const handleChangeDepartement = (event) => {
    setDepartement(event.target.value);
    console.log("departement" + departement);
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

  return (
    <Container sm className="FormContainer">
      <Container className="HeaderForm">
        <h1 className="h1-titleForm">
          Enregistre ta fiche de <span className="spanColor">tatoueur</span>
        </h1>
        <div class="separator"></div>
        <p>
          Rempli le formulaire ci dessous afin de creer ta fiche profil de
          tatoueur
        </p>
      </Container>

      <Form onSubmit={addProfil}>
        <Container>
          <h2 className="h2-titleForm">Création de ton compte</h2>
          <Container>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label className="labelForm">Pseudo d'artiste</Form.Label>
                <Form.Control
                  type="text"
                  name="pseudo_user"
                  placeholder="Ton pseudo"
                  onChange={(event) => {
                    setPseudoUser(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="labelForm">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="email@gmail.com"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="labelForm">Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Ton mot de passe"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>

          <Container className="CoordonneesForm">
            <h2 className="h2-titleForm">Tes Coordonnées de contact</h2>
            <Container>
              <Row>
                <Col>
                  <div className="group">
                    <Form.Group className="mb-3">
                      <Form.Label className="labelForm">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email_contact"
                        placeholder="mail-contact@gmail.com"
                        onChange={(event) => {
                          setEmailContact(event.target.value);
                        }}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col>
                  <div className="group">
                    <Form.Group className="mb-3">
                      <Form.Label className="labelForm">Telephone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="tel"
                        placeholder="06 .. .. .. .. .."
                        onChange={(event) => {
                          setTel(event.target.value);
                        }}
                      />
                    </Form.Group>
                  </div>
                </Col>
              </Row>
            </Container>

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
                      <Form.Label className="labelForm">Ta ville</Form.Label>
                      <Form.Control
                        as="select"
                        name="city"
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
                        Ton département
                      </Form.Label>

                      <Form.Control
                        as="select"
                        name="departement"
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

            <div className="group">
              <Container>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelForm">Instagram</Form.Label>
                      <Form.Control
                        type="url"
                        name="instagram"
                        placeholder="https://www.instagram.com/ton-insta/"
                        onChange={(event) => {
                          setInstagram(event.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col></Col>
                  <p>Ces coordonnées seront affichées sur ton profil pour que les visiteurs puissent te contacter directement.</p>

                </Row>
              </Container>
            </div>
          </Container>

          <FloatingLabel controlId="floatingTextarea2">
            <h2 className="h2-titleForm">Décris-toi: </h2>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Je suis tatoueur à"
              style={{ height: "100px" }}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <p>
              Donne le maximum d'informations sur toi, tes valeurs, ton style,
              tes inspirations. Donne envie aux visiteurs de te contacter.
            </p>
          </FloatingLabel>

          <div className="group">
            <h2 className="h2-titleForm">Quel est ton style graphique ?</h2>
            <div className="checkbox-group">
              {artstyles.map((artstyle) => (
                <div key={artstyle.id} className="checkbox-item mb-3">
                  <Form.Check
                    inline
                    label={artstyle.name}
                    name="artStyle_id"
                    type="checkbox"
                    id={`default-${artstyle.artstyle_id}`}
                    value={artstyle.artstyle_id}
                    onChange={handleCheckboxChange}
                  />
                </div>
              ))}
            </div>
            <p>Selectionne uniquement les styles pertinents (Max 3 styles).</p>
          </div>
          <h2 className="h2-titleForm">Télécharge ta photo de profil</h2>
          <Container className="fileForm">
            <Form.Group controlId="formFile" className="fileForm-item mb-3">
              <Form.Label className="labelForm">Photo de profil</Form.Label>
              <Form.Control
                type="file"
                id="fileInput"
                name="img_profil"
                onChange={changeHandler}
              />
              <p>Format carré mini 300 x 300px . Max : 500 x 500 px</p>
            </Form.Group>
          </Container>
          <div className="d-grid gap-2 mt-5">
          <Button type="submit" className="bouton">
              Valide ta fiche
            </Button>
          </div>
        </Container>
      </Form>
    </Container>
  );
};

export default RegisterForm;
