import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "../../../components/public/SearchBar/SearchForm"
import FlashTattooList from "../../../components/public/FlashTattoos/FlashTattooList"

const FlashList = () => {

    return (
        <div>
                  <div className="mt-4">
        <h1>
          Trouver un modèle <span> Tattoo Flash </span>
        </h1>
      </div>
            <SearchForm/>
            <FlashTattooList/>
        </div>
    );
};

export default FlashList;
