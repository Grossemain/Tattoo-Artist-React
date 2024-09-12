import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import ResultCard from './ResultCard';

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";


const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
      .get("http://127.0.0.1:8000/api/artstyles")
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
    const apiUrl = `http://127.0.0.1:8000/api/users/search?search=${searchQuery}`;
    console.log(results);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ search: searchQuery })
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
          <div className="text-dark text-center mb-5">

          </div>
          <div className="main-search-bar rounded-pill bg-white ">
            <Form onSubmit={handleFormSubmit} >
              <Row className="align-items-center d-flex justify-content-between">
                <Col className="d-flex justify-content-start">
                  <div className="border-end flex-grow-1 d-flex ps-3 d-flex align-items-center">
                    <Form.Control
                      type="text"
                      value={searchQuery}
                      onChange={handleInputChange}
                      placeholder="Rechercher un tatoueur"
                      className=" mr-sm-2 rounded-pill border-0 "
                    />
                  </div>
                </Col>
                <Col>
                <Form.Control
                className='border border-0'
                        as="select"
                        name="artStyle_id"
                        onChange={handleChangeArtStyles}
                      >
                        <option value="">Sélectionne un style</option>
                        {artstyles.map((artstyle) => (
                          <option key={artstyle.id} value={artstyle.artstyle_id}>
                            {artstyle.name}
                          </option>
                        ))}
                      </Form.Control>
                </Col>
                
                <Col className="d-flex justify-content-end">
                  <Button className="bouton" type="submit">Rechercher</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </section>
      <section className="Resultat">
        <Container fluid="md">
          <Row>
            <Col>
              {results.length > 0 ? (
                <div className= "row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
                  {results.map((user, index) => (
                      user.role_id !== 2 && user.user_id >= 4 && <ResultCard key={user} user={user}/>
                  ))}
                </div>
              ) : (
                hasSearched && <p>Aucun résultat trouvé</p>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Container >
  );
}

export default SearchForm;