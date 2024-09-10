import Axios from "./caller.service";

/**
 * Récupératoin de la liste des images
 * @returns {Promise}
 */
let getAllTattooShops = () => {
  return Axios.get("/api/tattooshops");
};

/**
 * Récupération d'une image
 * @param {number} tsid
 * @returns {Promise}
 */
let getTattooShop = (tsid) => {
  return Axios.get("/api/tattooshops/" + tsid);
};

/**
 * Ajout d'une image
 * @param {number} tattooshop
 * @returns {Promise}
 */
let addTattooShop = (tattooshop) => {
  return Axios.post("/api/tattooshops", tattooshop);
};

/**
 * Mise à jour d'une image
 * @param {number} tattooshop
 * @returns {Promise}
 */
let updateTattooShop = (tattooshop) => {
  return Axios.patch("/api/tattooshops/" + tattooshop.tattooshop_id, tattooshop);
};

/**
 * Suppression d'une image
 * @param {number} tsid
 * @returns {Promise}
 */
let deleteTattooShop = (tsid) => {
  return Axios.delete("/api/tattooshops/" + tsid);
};

// Déclaration des services pour import
export const tattooshopService = {
getAllTattooShops,
  getTattooShop,
  addTattooShop,
  updateTattooShop,
  deleteTattooShop,
};
