import React from "react";
import { Routes, Route } from "react-router-dom";
import { ALayout, Dashboard } from "../admin";
import { UEdit, User, UAdd } from "../admin/user/";
import {Artstyles, ASAdd, ASEdit } from "../admin/artstyle"
import {Pictures, PAdd, PEdit} from "../admin/picture"
import {FlashTattoos, FTAdd, FTEdit } from "../admin/flashTattoo"
import {TattooShops, TSAdd, TSEdit} from "../admin/tattooShop"

//modifier cette ligne pour Articles, Flashtattoos, pictures, tattooshops, users, artStyles

// import { User, UEdit} from '../admin/user'

import Error from "../../_utils/Error";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<ALayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users">
          <Route path="index" element={<User />} />
          <Route path="add" element={<UAdd />} />
          <Route path="edit/:user" element={<UEdit />} />
        </Route>
        <Route path="styles">
          <Route path="index" element={<Artstyles />} />
            <Route path="edit/:artstyle" element={<ASEdit/>}/>
            <Route path="add" element={<ASAdd/>}/>
        </Route>
        <Route path="pictures">
          <Route path="index" element={<Pictures />} />
            <Route path="edit/:picture" element={<PEdit/>}/>
            <Route path="add" element={<PAdd/>}/>
        </Route>
        <Route path="flashtattoos">
          <Route path="index" element={<FlashTattoos />} />
            <Route path="edit/:flashTattoo" element={<FTEdit/>}/>
            <Route path="add" element={<FTAdd/>}/>
        </Route>
        <Route path="tattooshops">
          <Route path="index" element={<TattooShops />} />
            <Route path="edit/:tattooShop" element={<TSEdit/>}/>
            <Route path="add" element={<TSAdd/>}/>
        </Route>

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
