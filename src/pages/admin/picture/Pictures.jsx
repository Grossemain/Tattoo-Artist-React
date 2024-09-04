import React, { useEffect, useRef, useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom'
import { pictureService } from '../../../_services/picture.service';

const Pictures = () => {
    const [Pictures, setPictures] = useState([])
    const flag = useRef(false)

    // Récupération de la liste des utilisateurs à l'affichage
    useEffect(() => {
        if(flag.current === false){
            pictureService.getAllPictures()
                .then(res => {
                    // Liste dans le state
                    setPictures(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        
    }, [])

    // Gestion du bouton de suppression d'un utilisateur
    const delPicture = (PictureId) => {
        pictureService.deletePicture(PictureId)
            .then(res => {
                // Mise à jour du state pour affichage
                setPictures((current) => current.filter(Picture => Picture.id !== PictureId))
            })
            .catch(err => console.log(err))
    }

    return (        
        <div>
            <div className="container mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>id</th>
                        <th>Image</th>
                        <th>alt</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Pictures.map((Picture) => (
                            <tr key={Picture.id}>
                                <td>{Picture.picture_id}</td>
                                <td>{Picture.image}</td>
                                <td>{Picture.alt}</td>
                                <td>
                                    <span className="m-1">
                                    <Button
                                            variant="primary">
                                            <Link className="text-light text-decoration-none"to={`/admin/pictures/edit/${Picture.picture_id}`}>Edit</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                        <Button
                                            variant="danger"
                                            onClick={() => delPicture(Picture.picture_id)}
                                        >
                                            Supprimer
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                    <Button
                                            variant="success">
                                            <Link className="text-light text-decoration-none"to={`/pictures/${Picture.picture_id}`}>Voir</Link>
                                        </Button>
                                    </span>
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            </div>
        </div>
    );
};

export default Pictures;