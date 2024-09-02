import Axios from "./caller.service";

/**
 * Récupératoin de la liste des utilisateurs
 * @returns {Promise}
 */
let getAllUsers = () => {
  return Axios.get("/api/users");
};

/**
 * Récupération d'un utilisateur
 * @param {number} uid
 * @returns {Promise}
 */
let getUser = (uid) => {
  return Axios.get("/api/users/" + uid);
};

/**
 * Ajout d'un utilisateur
 * @param {number} formData
 * @returns {Promise}
 */
let addUser = (formData) => {
  return Axios.postForm("/api/register", formData);
};


/**
 * Mise à jour d'un utilisateur
 * @param {number} user
 * @returns {Promise}
 */
let updateUser = (user) => {
  return Axios.patch("/api/users/" + user.user_id, user);
};

/**
 * Suppression d'un utilsateur
 * @param {number} uid
 * @returns {Promise}
 */
let deleteUser = (uid) => {
  return Axios.delete("/api/users/" + uid);
};

// Déclaration des services pour import
export const userService = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
