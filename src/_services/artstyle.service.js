import Axios from "./caller.service";

/**
 * Récupératoin de la liste des categories
 * @returns {Promise}
 */
let getAllArtstyles = () => {
  return Axios.get("/api/artstyles");
};

/**
 * Récupération d'une categorie
 * @param {number} Cid
 * @returns {Promise}
 */
let getArtstyle = (ASid) => {
  return Axios.get("/api/artstyles/" + ASid);
};

/**
 * Ajout d'une categorie
 * @param {number} artsyle
 * @returns {Promise}
 */
let addArtstyle = (artsyle) => {
  return Axios.post("/api/artstyles", artsyle);
};

/**
 * Mise à jour d'une categorie
 * @param {number} artsyle
 * @returns {Promise}
 */
let updateArtstyle = (artsyle) => {
  return Axios.patch("/api/artstyles/" + artsyle.id, artsyle);
};

/**
 * Suppression d'une categorie
 * @param {number} ASid
 * @returns {Promise}
 */
let deleteArtstyle = (ASid) => {
  return Axios.delete("/api/artstyles/" + ASid);
};

// Déclaration des services pour import
export const artstyleService = {
getAllArtstyles,
  getArtstyle,
  addArtstyle,
  updateArtstyle,
  deleteArtstyle,
};
