import React from "react";
import { Routes, Route } from "react-router-dom";
import { ALayout, Dashboard } from "../admin";
import { User } from "../admin/user/";
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
        </Route>

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
