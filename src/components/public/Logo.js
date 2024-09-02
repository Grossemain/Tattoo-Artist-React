import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <a href="/"><img src="./logo-tattoo-artist.png" alt="logo Tattoo Artist" height="100px"/></a>
    </div>
  );
};

export default Logo;
