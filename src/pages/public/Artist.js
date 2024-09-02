import React, { useEffect, useState } from 'react';

import { userService } from '../../_services/';
import { useParams } from 'react-router-dom';


const Artist = () => {
    const [artist, setArtist] = useState({})
    let {uid} = useParams()

    // Récupération du user depuis l'API
    useEffect(() => {
        userService.getUser(uid)
            .then(res => setArtist(res.data))
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])
console.log("Artist:"+ artist);
    return ( 
        <div className='service'>
            <img src={artist.img_profil + artist.user_id} alt={artist.pseudo_user} />
            <div>{artist.pseudo_user}</div>
            <div>{artist.description}</div>
            <div>{artist.email_contact}</div>
            <div>{artist.tel}</div>
            <div>{artist.instagram}</div>
            <div>{artist.city}</div>
            <div>{artist.departement}</div>
        </div>
    );
};

export default Artist;