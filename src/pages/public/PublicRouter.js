import React from 'react';
import { Routes, Route } from "react-router-dom"

import { Layout, Home, Register, RegisterUpdate, Merci } from '../../pages/public/'
import { ArtistProfil, TattooArtistList} from '../../pages/public/tatoueurs/'
import { ArtStyleFiche, TattooArtStyleList} from '../../pages/public/artstyles/'
import { PictureFiche, PicturesList} from '../../pages/public/Gallery'
import { FlashFiche, FlashList} from '../../pages/public/Flash'
import { TattooShopFiche, TattooShopList} from '../../pages/public/TattooShop'
import { ArticleFiche, ArticleList} from '../../pages/public/articles'

import { Legals, Rgpd } from '../../pages/public/content/'
import Error from '../../_utils/Error'


const PublicRouter = () => {
    return (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="compte" element={<RegisterUpdate />} />
            <Route path="merci" element={<Merci />} />

            <Route path="tatoueurs" element={<TattooArtistList/>} />
            <Route path="tatoueur/:uid" element={<ArtistProfil />} />

            <Route path="styles" element={<TattooArtStyleList/>} />
            <Route path="styles/:asid" element={<ArtStyleFiche/>} />
            
            <Route path="galerie" element={<PicturesList/>} />
            <Route path="galerie/:pid" element={<PictureFiche/>} />

            <Route path="flash" element={<FlashList/>} />
            <Route path="flash/:ftid" element={<FlashFiche/>} />

            <Route path="tattooshops" element={<TattooShopList/>} />
            <Route path="tattooshop/:tsid" element={<TattooShopFiche/>} />

            <Route path="articles" element={<ArticleList/>} />
            <Route path="article/:aid" element={<ArticleFiche/>} />

            <Route path="*" element={<Error />} />
            <Route path="mentions-legales" element={<Legals />} />
            <Route path="rgpd" element={<Rgpd />} />
          </Route>

        </Routes>
    );
};

export default PublicRouter;