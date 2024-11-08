import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import ResultCard from "./ResultCard";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const [artstyles, setArtStyles] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  console.log(results.values);

  //On appel les ArtStyles
  // Fetch places (artsyles) from API
  useEffect(() => {
    axios
      .get("https://api.le-tatouage.fr/api/artstyles")
      .then((response) => {
        setArtStyles(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  const handleChangeArtStyles = (event) => {
    setArtStyles(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Mettre à jour l'état hasSearched à vrai pour indiquer qu'une recherche a été effectuée
    setHasSearched(true);

    // Renseigner l'url de l'api
    const apiUrl = `https://api.le-tatouage.fr/api/users/searchByUsersAndArtstyles?search=${searchQuery}`;
    console.log(results);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: searchQuery }),
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
    }
  };

  return (
    <Container fluid="md">
      <section className="Recherche">
        <div className="col-12 col-md-8 mx-auto hero-content">
          <div className="text-dark text-center mb-5"></div>
          <div className="main-search-bar rounded-pill bg-white">
            <Form onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-col">
                  <div className="input-container">
                    <Form.Control
                      type="text"
                      value={searchQuery}
                      onChange={handleInputChange}
                      placeholder="🔎 un tatoueur"
                      className="input-text"
                    />
                  </div>
                </div>
                <div className="form-col">
                  <Form.Control
                    className="input-text border border-0"
                    as="select"
                    name="artStyle_id"
                  >
                    <option value="">Sélectionne un style</option>
                    <option value="minimaliste">Minimaliste</option>
                    <option value="realiste">Réalisme</option>
                    <option value="polynesien">Polynésien</option>
                    <option value="japonais">Japonais</option>
                    <option value="aquarelle">Aquarelle</option>
                    <option value="old-school">Old School</option>
                    <option value="mandala">Mandala</option>
                    <option value="graphique">Graphique</option>
                    <option value="ornemental">Ornemental</option>
                    <option value="celtique">Celtique</option>
                    <option value="biomecanique">Biomécanique</option>
                    <option value="tribal">Tribal</option>
                    <option value="fineline">Fineline</option>
                    <option value="handpoke">Handpoke</option>
                    <option value="animaux">Animaux</option>
                    <option value="manga">Manga</option>
                    <option value="lettrage">Lettrage</option>
                    <option value="viking">Viking</option>
                    <option value="dotwork">Dotwork</option>
                    <option value="trait-fin">Trait fin</option>
                    <option value="cover">Cover</option>
                    <option value="doigt">Doigt</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="portrait">Portrait</option>
                    <option value="geometrique">Géométrique</option>
                    <option value="fleur">Fleur</option>
                    <option value="calligraphie">Calligraphie</option>
                  </Form.Control>
                </div>
                <div className="form-col button-container">
                  <Button className="bouton" type="submit">
                    Rechercher
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </section>
      <div className="styled-text mt-3">
        <p>
          Entre un mot-clé : nom d'un tatoueur, ville, département ou style :
          exemple Nantes.
        </p>
      </div>
      <section className="Resultat">
        <Container fluid="md">
          <Row>
            <Col>
              {results.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
                  {results.map(
                    (user, index) =>
                      user.role_id !== 2 &&
                      user.user_id >= 4 && (
                        <ResultCard key={user.user_id} user={user} />
                      )
                  )}
                </div>
              ) : (
                hasSearched && <p>Aucun résultat trouvé</p>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default SearchForm;
