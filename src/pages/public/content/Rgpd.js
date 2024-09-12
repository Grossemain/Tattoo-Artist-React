import React from 'react';
import {Container} from "react-bootstrap";

const Rgpd = () => {
    return (
        <div className="Content">
            <Container>
            <h1>TRAITEMENT DES DONNÉES PERSONNELLES</h1>

    <p>
        Toutes les informations vous concernant récoltées dans les formulaires disponibles sur ce site sont destinées à notre établissement.
    </p>
    <p>
        Nota : En conformité avec la loi n°787-17 du 16 juin 1978 (CNIL), vous pouvez par simple courrier ou e-mail, nous signaler toute erreur ou tout changement concernant les éléments que vous nous fournissez, ou vous pouvez demander à ne plus figurer sur notre fichier informatique.
    </p>
    <p>
        Droit de réponse par courrier à : Romain Maillet, 126 route de Vannes, 44100 Nantes.
    </p>
    </Container>
        </div>
    );
};

export default Rgpd;