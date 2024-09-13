import React from "react";
import { Container } from "react-bootstrap";

const Erreur404 = () => {
  return (
    <Container flex>
    <div className="erreur404">
      <img src="./erreur-404.jpg" alt="tatouage erreur 404" width="500px"/>
      <div>
        <p>Error 404 ! La page que vous demandez n'existe pas.</p>
        <a href="/">Retour à la page d'accueil</a>
      </div>
    </div>
    </Container>
  );
};

export default Erreur404;
