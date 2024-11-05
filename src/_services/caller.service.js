import axios from "axios";
import { accountService } from "./account.service";


const Axios = axios.create({
  baseURL: "https://api.le-tatouage.fr",
  headers: { "Content-Type": "multipart/form-data" },
});

// Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use((request) => {
  if (accountService.isLogged()) {
    request.headers.Authorization = "Bearer " + accountService.getToken();
  }
  return request;
});

// Intercepteur de réponse API pour vérification de la session
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      accountService.logout();
      window.location = "/auth/login";
    } else {
      return Promise.reject(error);
    }
  }
);

export default Axios;
