import React from 'react';
import { Routes, Route } from "react-router-dom"
//modifier cette ligne pour Articles, Flashtattoos, pictures, tattooshops, users, artStyles

import { Layout, Home, Register, Merci, Artist, TattooArtistList } from '../../pages/public/'

import Error from '../../_utils/Error'


const PublicRouter = () => {
    return (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="merci" element={<Merci />} />
            <Route path="tatoueurs" element={<TattooArtistList/>} />
            <Route path="tatoueur/:uid" element={<Artist />} />
            <Route path="*" element={<Error />} />
          </Route>

        </Routes>
    );
};

export default PublicRouter;