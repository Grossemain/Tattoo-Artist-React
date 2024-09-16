import React from "react";
import { Routes, Route } from "react-router-dom";
import { ULayout, Account } from "../admin";
import { User,UEdit } from "../admin/user/";
import { Pictures, PAdd, PEdit } from "../admin/picture";
import { FlashTattoos, FTAdd, FTEdit } from "../admin/flashTattoo";
import { TattooShops, TSAdd, TSEdit } from "../admin/tattooShop";
import { Articles, AAdd, AEdit } from "../admin/Article";
import { accountService } from "../../_services";


import Error from "../../_utils/Error";

const UserRouter = () => {
  const userRole = accountService.getRole(); // Fonction pour obtenir le rôle de l'utilisateur

  if (userRole==1) {
  return (
    //Mettre une condition pour n'afficher ces routes seulement au role_id = 1
    <Routes>
      <Route element={<ULayout />}>
        <Route index element={<Account />} />
        <Route path="mon-compte" element={<Account />} />
        <Route path="users">
          <Route path="edit/" element={<UEdit />} />
        </Route>

        <Route path="pictures">
          {/* mettre une condition pour donner accès aux données liées à l'user_id */}
          <Route path="index" element={<Pictures />} />
          <Route path="edit/:picture" element={<PEdit />} />
          <Route path="add" element={<PAdd />} />
        </Route>
        <Route path="flashtattoos">
          {/* mettre une condition pour donner accès aux données liées à l'user_id */}
          <Route path="index" element={<FlashTattoos />} />
          <Route path="edit/:flashTattoo" element={<FTEdit />} />
          <Route path="add" element={<FTAdd />} />
        </Route>
        <Route path="tattooshops">
          {/* mettre une condition pour donner accès aux données liées à l'user_id */}
          <Route path="index" element={<TattooShops />} />
          <Route path="edit/:tattooShop" element={<TSEdit />} />
          <Route path="add" element={<TSAdd />} />
        </Route>
        <Route path="articles">
          {/* mettre une condition pour donner accès aux données liées à l'user_id */}
          <Route path="index" element={<Articles />} />
          <Route path="edit/:article" element={<AEdit />} />
          <Route path="add" element={<AAdd />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}else{
  return <h1>Vous n'avez pas les droits d'accès à cette page</h1>; // Afficher un message d'erreur si l'utilisateur n'est pas administrateur
 
}
};

export default UserRouter;
