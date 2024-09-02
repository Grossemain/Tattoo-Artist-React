import React from "react";

const Banniere = () => {
  return (
    <div className="banniere">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src="./banniere_tattoo_artist.png" alt="banniere site tatoo artist" />
    </div>
  );
};

export default Banniere;
