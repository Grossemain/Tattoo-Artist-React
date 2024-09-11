import Axios from "./caller.service";

/**
 * Récupératoin de la liste des articles
 * @returns {Promise}
 */
let getAllArticles = () => {
  return Axios.get("/api/articles");
};

/**
 * Récupération d'un article
 * @param {number} Aid
 * @returns {Promise}
 */
let getArticle = (Aid) => {
  return Axios.get("/api/articles/" + Aid);
};

/**
 * Ajout d'un article
 * @param {number} article
 * @returns {Promise}
 */
let addArticle = (article) => {
  return Axios.post("/api/articles", article);
};


/**
 * Mise à jour d'un article
 * @param {number} article
 * @returns {Promise}
 */
let updateArticle = (article) => {
  return Axios.patch("/api/articles/" + article.id, article);
};

/**
 * Suppression d'un article
 * @param {number} Aid
 * @returns {Promise}
 */
let deleteArticle = (Aid) => {
  return Axios.delete("/api/articles/" + Aid);
};

// Déclaration des services pour import
export const articleService = {
  getAllArticles,
  getArticle,
  addArticle,
  updateArticle,
  deleteArticle,
};
