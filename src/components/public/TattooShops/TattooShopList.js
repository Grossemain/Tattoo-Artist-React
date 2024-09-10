import React, { useEffect, useState } from "react";

import axios from "axios";
import TattooShopCard from "./TattooShopCard";

const TattooShopList = () => {
  useEffect(() => {
    displayTattooShop();
  }, []); // Sans les crochets ça tourne en boucle

  const [TattooShops, setTattooShops] = useState([]);

  const displayTattooShop = async () => {
    await axios.get("http://127.0.0.1:8000/api/tattooshops")
    .then((res) => {
      setTattooShops(res.data);
      console.log(res.data);
    });
  };

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
        {TattooShops.map((tattooshop, index) => (
          <TattooShopCard key={index} tattooshop={tattooshop} />
        ))}
      </div>
    </div>
  );
};

export default TattooShopList;
