import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "../../../components/public/SearchBar/SearchForm"
import ArticleList from "../../../components/public/Articles/ArticleList"

const FlashList = () => {

    return (
        <div>
            <SearchForm/>
            <ArticleList/>
        </div>
    );
};

export default FlashList;
