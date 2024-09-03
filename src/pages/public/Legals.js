import React from "react";
import {Container} from "react-bootstrap";

const Legals = () => {
  return (
    <div className="Content">
        <Container>
      <h1>MENTIONS LÉGALES</h1>

      <p>
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance en l'économie numérique, il est précisé aux utilisateurs du
        site Tattoo Artist l'identité des différents intervenants dans le cadre
        de sa réalisation et de son suivi.
      </p>

      <h2>Édition du site</h2>
      <p>
        Le présent site, accessible à l’URL{" "}
        <a href="https://tattoo-artist.fr">https://tattoo-artist.fr</a> (le «
        Site »), est édité par :
      </p>
      <p>
        Romain Maillet, résidant 126 route de Vannes 44300 Nantes, de
        nationalité Française (France), né(e) le 04/05/1984.
      </p>

      <h2>Hébergement</h2>
      <p>
        Le Site est hébergé par la société OVH SAS, située 2 rue Kellermann - BP
        80157 - 59053 Roubaix Cedex 1, (contact téléphonique ou email : 1007).
      </p>

      <h2>Directeur de publication</h2>
      <p>Le Directeur de la publication du Site est Romain Maillet.</p>

      <h2>Nous contacter</h2>
      <div class="contact-info">
        <p>Par téléphone : +33 6 82 64 64 62</p>
        <p>
          Par email :{" "}
          <a href="mailto:grossemain@gmail.com">grossemain@gmail.com</a>
        </p>
        <p>Par courrier : 126 route de Vannes 44300 Nantes</p>
      </div>

      <p>Génération des mentions légales par Legalstart.</p>
      </Container>
    </div>
  );
};

export default Legals;
