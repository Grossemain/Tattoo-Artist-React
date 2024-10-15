import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "../../../components/public/SearchBar/SearchForm";
import ArticleList from "../../../components/public/Articles/ArticleList";

const FlashList = () => {
  return (
    <div>
      <div className="mt-4">
        <h1>
          Blog du <span> tatoueur</span>
        </h1>
      </div>
      <SearchForm />
      <ArticleList />
    </div>
  );
};

export default FlashList;
