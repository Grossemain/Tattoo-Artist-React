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
 * @param {number} asid
 * @returns {Promise}
 */
let getArtstyle = (asid) => {
  return Axios.get("/api/artstyles/" + asid);
};

/**
 * Ajout d'une categorie
 * @param {number} artstyle
 * @returns {Promise}
 */
let addArtstyle = (artstyle) => {
  return Axios.post("/api/artstyles", artstyle);
};

/**
 * Mise à jour d'une categorie
 * @param {number} artstyle
 * @returns {Promise}
 */
let updateArtstyle = (artstyle) => {
  return Axios.patch("/api/artstyles/" + artstyle.artstyle_id, artstyle);
};

/**
 * Suppression d'une categorie
 * @param {number} asid
 * @returns {Promise}
 */
let deleteArtstyle = (asid) => {
  return Axios.delete("/api/artstyles/" + asid);
};

// Déclaration des services pour import
export const artstyleService = {
getAllArtstyles,
  getArtstyle,
  addArtstyle,
  updateArtstyle,
  deleteArtstyle,
};
