import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "../../../components/public/SearchBar/SearchForm"
import ArtStyleList from "../../../components/public/ArtStyles/ArtStyleList";

const TattooArtStyleList = () => {

    return (
        <div>
            <SearchForm/>
            <ArtStyleList/>
        </div>
    );
};

export default TattooArtStyleList;
