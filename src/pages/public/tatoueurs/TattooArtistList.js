import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "../../../components/public/SearchBar/SearchForm"
import UserList from "../../../components/public/Users/UserList";

const TattooArtistList = () => {

    return (
        <div>
            <SearchForm/>
            <UserList/>
        </div>
    );
};

export default TattooArtistList;
