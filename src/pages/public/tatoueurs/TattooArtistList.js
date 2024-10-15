import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "../../../components/public/SearchBar/SearchForm"
import UserList from "../../../components/public/Users/UserList";

const TattooArtistList = () => {

    return (
        <div>
            <div className="mt-4">
        <h1>
          Liste de tatoueurs <span> Français </span>
        </h1>
      </div>
            <SearchForm/>
            <UserList/>
        </div>
    );
};

export default TattooArtistList;
