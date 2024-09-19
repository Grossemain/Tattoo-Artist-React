import React, { useEffect, useRef, useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom'
import { flashtattooService } from '../../../_services/flashtattoo.service';
import { userService } from '../../../_services/user.service';

const FlashTattoos = () => {
    const [FlashTattoos, setFlashTattoos] = useState([])
    const flag = useRef(false)
    const [userId, setUserId] = useState();

    //on recupere l'utilisateur connecté
  useEffect(() => {
    userService
    .getCurrentUser()
    .then((res) => {
        setUserId(res.data.user_id);
        console.log("currentUser: " + res.data.user_id);
      })
      .catch((error) => {
        console.log(error);
      });
  });



    // Récupération de la liste des utilisateurs à l'affichage
    useEffect(() => {
            flashtattooService.getUserFlashTattoos(userId)
                .then(res => {
                    // Liste dans le state
                    setFlashTattoos(res.data)
                })
                .catch(err => console.log(err))
    }, [userId]);

    // Gestion du bouton de suppression d'un utilisateur
    const delFlashTattoo = (FlashTattooId) => {
        flashtattooService.deleteFlashTattoo(FlashTattooId)
            .then(res => {
                // Mise à jour du state pour affichage
                setFlashTattoos((current) => current.filter(FlashTattoo => FlashTattoo.id !== FlashTattooId))
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
                    <th>User-id</th>
                        <th>Image</th>
                        <th>titre</th>
                        <th>Dispo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {FlashTattoos.map((FlashTattoo) => (
                            <tr key={FlashTattoo.id}>
                                <td>{FlashTattoo.flashtattoo_id}</td>
                                <td>{FlashTattoo.user_id}</td>
                                <td>{FlashTattoo.img_flashtattoo}</td>
                                <td>{FlashTattoo.h1_title}</td>
                                <td>{FlashTattoo.disponibility}</td>
                                <td>
                                    <span className="m-1">
                                    <Button
                                            variant="primary">
                                            <Link className="text-light text-decoration-none"to={`/admin/flashtattoos/edit/${FlashTattoo.flashtattoo_id}`}>Edit</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                        <Button
                                            variant="danger"
                                            onClick={() => delFlashTattoo(FlashTattoo.flashtattoo_id)}
                                        >
                                            Supprimer
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                    <Button
                                            variant="success">
                                            <Link className="text-light text-decoration-none"to={`/flashtattoos/${FlashTattoo.flashtattoo_id}`}>Voir</Link>
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

export default FlashTattoos;