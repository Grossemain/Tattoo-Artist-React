import React, { useEffect, useState } from "react";

import axios from "axios";
import ArtStyleCard from "../ArtStyles/ArtStyleCard";



const ArtStyleList = () => {
  useEffect(() => {
    displayArtStyles();
  }, []); // Sans les crochets ça tourne en boucle

  const [ArtStyles, setArtStyles] = useState([]);

  const displayArtStyles = async () => {
    await axios.get("http://127.0.0.1:8000/api/artstyles").then((res) => {
      setArtStyles(res.data);
    });
  };

  return (
    <div>

      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
        {ArtStyles.map((artstyle, index) => (
          <ArtStyleCard key={index} artstyle={artstyle} />
        ))}
      </div>
    </div>
  );
};

export default ArtStyleList;
