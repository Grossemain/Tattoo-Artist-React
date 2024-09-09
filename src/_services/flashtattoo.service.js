import Axios from "./caller.service";

/**
 * Récupératoin de la liste des images
 * @returns {Promise}
 */
let getAllFlashTattoos = () => {
  return Axios.get("/api/flashtattoos");
};

/**
 * Récupération d'une image
 * @param {number} ftid
 * @returns {Promise}
 */
let getFlashTattoo = (ftid) => {
  return Axios.get("/api/flashtattoos/" + ftid);
};

/**
 * Ajout d'une image
 * @param {number} flashtattoo
 * @returns {Promise}
 */
let addFlashTattoo = (flashtattoo) => {
  return Axios.post("/api/flashtattoos", flashtattoo);
};

/**
 * Mise à jour d'une image
 * @param {number} flashtattoo
 * @returns {Promise}
 */
let updateFlashTattoo = (flashtattoo) => {
  return Axios.patch("/api/flashtattoos/" + flashtattoo.flashtattoo_id, flashtattoo);
};

/**
 * Suppression d'une image
 * @param {number} ftid
 * @returns {Promise}
 */
let deleteFlashTattoo = (ftid) => {
  return Axios.delete("/api/flashtattoos/" + ftid);
};

// Déclaration des services pour import
export const flashtattooService = {
getAllFlashTattoos,
  getFlashTattoo,
  addFlashTattoo,
  updateFlashTattoo,
  deleteFlashTattoo,
};
