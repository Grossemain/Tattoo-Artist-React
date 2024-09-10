import React, { useEffect, useState } from "react";

import axios from "axios";
import PictureGalleryCard from "./PictureGalleryCard"

const PictureGalleryList = () => {
  useEffect(() => {
    displayPictures();
  }, []); // Sans les crochets ça tourne en boucle

  const [Pictures, setPictures] = useState([]);

  const displayPictures = async () => {
    await axios.get("http://127.0.0.1:8000/api/pictures").then((res) => {
      setPictures(res.data);
      console.log(res.data.user);
    });
  };

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
        {Pictures.map((picture, index) => (
          <PictureGalleryCard key={index} picture={picture} />
        ))}
      </div>
    </div>
  );
};

export default PictureGalleryList;
