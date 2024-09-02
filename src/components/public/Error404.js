import React from "react";

const Erreur404 = () => {
  return (
    <div className="erreur404">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src="./erreur-404.jpg" alt="tatouage erreur 404" width="500px"/>
      <div>
        <p>Error 404 ! La page que vous demandez n'existe pas.</p>
        <a href="/">Retour à la page d'accueil</a>
      </div>
    </div>
  );
};

export default Erreur404;
