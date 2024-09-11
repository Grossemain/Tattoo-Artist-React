import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "../../../components/public/SearchBar/SearchForm"
import TattooShopList from "../../../components/public/TattooShops/TattooShopList"

const FlashList = () => {

    return (
        <div>
            <SearchForm/>
            <TattooShopList/>
        </div>
    );
};

export default FlashList;
