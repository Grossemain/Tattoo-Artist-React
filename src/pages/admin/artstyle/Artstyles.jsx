import React, { useEffect, useRef, useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Link } from 'react-router-dom'
import { artstyleService } from '../../../_services/artstyle.service';

const Artstyles = () => {
    const [Artstyles, setArtstyles] = useState([])
    const flag = useRef(false)

    // Récupération de la liste des utilisateurs à l'affichage
    useEffect(() => {
        if(flag.current === false){
            artstyleService.getAllArtstyles()
                .then(res => {
                    // Liste dans le state
                    setArtstyles(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        
    }, [])

    // Gestion du bouton de suppression d'un utilisateur
    const delArtstyle = (ArtstyleId) => {
        artstyleService.deleteArtstyle(ArtstyleId)
            .then(res => {
                // Mise à jour du state pour affichage
                setArtstyles((current) => current.filter(Artstyle => Artstyle.id !== ArtstyleId))
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
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Artstyles.map((Artstyle) => (
                            <tr key={Artstyle.id}>
                                <td>{Artstyle.artstyle_id}</td>
                                <td>{Artstyle.name}</td>
                                <td>{Artstyle.description}</td>
                                <td>
                                    <span className="m-1">
                                    <Button
                                            variant="primary">
                                            <Link className="text-light text-decoration-none"to={`/admin/styles/edit/${Artstyle.artstyle_id}`}>Edit</Link>
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                        <Button
                                            variant="danger"
                                            onClick={() => delArtstyle(Artstyle.artstyle_id)}
                                        >
                                            Supprimer
                                        </Button>
                                    </span>
                                    <span className="m-1">
                                    <Button
                                            variant="success">
                                            <Link className="text-light text-decoration-none"to={`/styles/${Artstyle.artstyle_id}`}>Voir</Link>
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

export default Artstyles;