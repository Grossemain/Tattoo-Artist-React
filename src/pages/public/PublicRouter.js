import React from 'react';
import { Routes, Route } from "react-router-dom"
//modifier cette ligne pour Articles, Flashtattoos, pictures, tattooshops, users, artStyles

import { Layout, Home, Register, Merci } from '../../pages/public/'

import Error from '../../_utils/Error'
import TattooArtist from './TattooArtist';


const PublicRouter = () => {
    return (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="merci" element={<Merci />} />
            <Route path="tatoueurs" element={<TattooArtist/>} />


            <Route path="*" element={<Error />} />
          </Route>

        </Routes>
    );
};

export default PublicRouter;