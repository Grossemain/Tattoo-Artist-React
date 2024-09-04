import React from 'react';
import { Routes, Route } from "react-router-dom"
//modifier cette ligne pour Articles, Flashtattoos, pictures, tattooshops, users, artStyles

import { Layout, Home, Register, Merci } from '../../pages/public/'
import { ArtistProfil, TattooArtistList} from '../../pages/public/tatoueurs/'
import { ArtStyleFiche, TattooArtStyleList} from '../../pages/public/artstyles/'
import { Legals, Rgpd } from '../../pages/public/content/'
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
            <Route path="tatoueur/:uid" element={<ArtistProfil />} />
            <Route path="styles" element={<TattooArtStyleList/>} />
            <Route path="styles/:asid" element={<ArtStyleFiche/>} />
            <Route path="*" element={<Error />} />
            <Route path="mentions-legales" element={<Legals />} />
            <Route path="rgpd" element={<Rgpd />} />
          </Route>

        </Routes>
    );
};

export default PublicRouter;