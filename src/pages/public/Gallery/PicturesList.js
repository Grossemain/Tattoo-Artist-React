import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "../../../components/public/SearchBar/SearchForm"
import PictureList from "../../../components/public/Pictures/PictureList"

const PicturesList = () => {

    return (
        <div>
            <div className="mt-4">
        <h1>
          Galerie de <span> Tatouages </span>
        </h1>
      </div>
            <SearchForm/>
            <PictureList/>
        </div>
    );
};

export default PicturesList;
