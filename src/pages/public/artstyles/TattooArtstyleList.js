import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "../../../components/public/SearchBar/SearchForm"
import ArtStyleList from "../../../components/public/ArtStyles/ArtStyleList";

const TattooArtStyleList = () => {

    return (
        <div>
                  <div className="mt-4">
        <h1>
          Les styles de <span> tatouages</span>
        </h1>
      </div>
            <SearchForm/>
            <ArtStyleList/>
        </div>
    );
};

export default TattooArtStyleList;
