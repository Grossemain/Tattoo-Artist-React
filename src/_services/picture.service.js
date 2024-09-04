import Axios from "./caller.service";

/**
 * Récupératoin de la liste des images
 * @returns {Promise}
 */
let getAllPictures = () => {
  return Axios.get("/api/pictures");
};

/**
 * Récupération d'une image
 * @param {number} pid
 * @returns {Promise}
 */
let getPicture = (pid) => {
  return Axios.get("/api/pictures/" + pid);
};

/**
 * Ajout d'une image
 * @param {number} picture
 * @returns {Promise}
 */
let addPicture = (picture) => {
  return Axios.post("/api/pictures", picture);
};

/**
 * Mise à jour d'une image
 * @param {number} picture
 * @returns {Promise}
 */
let updatePicture = (picture) => {
  return Axios.patch("/api/pictures/" + picture.picture_id, picture);
};

/**
 * Suppression d'une image
 * @param {number} pid
 * @returns {Promise}
 */
let deletePicture = (pid) => {
  return Axios.delete("/api/pictures/" + pid);
};

// Déclaration des services pour import
export const pictureService = {
getAllPictures,
  getPicture,
  addPicture,
  updatePicture,
  deletePicture,
};
