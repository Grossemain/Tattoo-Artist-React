import React, { useEffect, useState } from "react";

import axios from "axios";
import ArticleCard from "../Articles/ArticleCard";



const ArticleList = () => {
  useEffect(() => {
    displayArticles();
  }, []); // Sans les crochets ça tourne en boucle

  const [Articles, setArticles] = useState([]);

  const displayArticles = async () => {
    await axios.get("http://127.0.0.1:8000/api/articles").then((res) => {
      setArticles(res.data);
    });
  };

  return (
    <div>

      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
        {Articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
