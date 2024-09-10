import React, { useEffect, useState } from "react";

import axios from "axios";
import FlashTattooCard from "./FlashTattooCard";

const FlashTattooList = () => {
  useEffect(() => {
    displayFlashTattoos();
  }, []); // Sans les crochets ça tourne en boucle

  const [FlashTattoos, setFlashTattoos] = useState([]);

  const displayFlashTattoos = async () => {
    await axios.get("http://127.0.0.1:8000/api/flashtattoos")
    .then((res) => {
      setFlashTattoos(res.data);
      console.log(res.data);
    });
  };

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
        {FlashTattoos.map((flashtattoo, index) => (
          <FlashTattooCard key={index} flashtattoo={flashtattoo} />
        ))}
      </div>
    </div>
  );
};

export default FlashTattooList;
