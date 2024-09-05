import Axios from "./caller.service";
import {jwtDecode} from "jwt-decode";

/**
 * Connexion vers l'API
 * @param {object} credentials
 * @returns {Promise}
 */
let login = (credentials) => {
  return Axios.post("/api/login", credentials);
};

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token
 */
let saveToken = (token) => {
  localStorage.setItem("token", token);
};

/**
 * Suppression du token du localStorage
 */
let logout = () => {
  localStorage.removeItem("token");
};

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
let isLogged = () => {
  let token = localStorage.getItem("token");
  console.log(token);

  return !!token;
};

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getToken = () => {
  return localStorage.getItem("token");
};


let getDecodedToken = () => {
  if (getToken()) {
    return jwtDecode(localStorage.getItem("token"));
  } else {
    return false;
  }

};


let getExpiryTime = () => {
    if (getDecodedToken() && !(getDecodedToken().exp * 1000 < Date.now())) {
      return true;
    } else {
      return localStorage.removeItem("token");
    }
  };


  let getRole = () => {
    // On teste si il y a un token décodé et si il n'a pas expiré
    if (getExpiryTime()) {
      // la valeur de base est un tableau dans un string, on le parse pour faire sauter le string et
      // on le tostring pour faire sauter le tableau, comme ça on a seulement la valeur
      return JSON.parse(getDecodedToken().role_id).toString();
    } else {
      return false;
    }
  };


// Déclaration des services pour import
export const accountService = {
  login,
  saveToken,
  logout,
  isLogged,
  getToken,
  getDecodedToken,
  getRole,
};
