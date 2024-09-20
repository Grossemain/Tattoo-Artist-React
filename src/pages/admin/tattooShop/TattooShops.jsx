import React, { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { tattooshopService } from "../../../_services/tattooshop.service";
import { userService } from "../../../_services/user.service";

const TattooShops = () => {
  const [TattooShops, setTattooShops] = useState([]);
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
    tattooshopService
      .getUserTattooshops(userId)
      .then((res) => {
        // Liste dans le state
        setTattooShops(res.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  // Gestion du bouton de suppression d'un utilisateur
  const delTattooShop = (TattooShopId) => {
    tattooshopService
      .deleteTattooShop(TattooShopId)
      .then((res) => {
        // Mise à jour du state pour affichage
        setTattooShops((current) =>
          current.filter((TattooShop) => TattooShop.id !== TattooShopId)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Nom</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {TattooShops.map((TattooShop) => (
              <tr key={TattooShop.id}>
                <td>{TattooShop.tattooshop_id}</td>
                <td>{TattooShop.name}</td>
                <td>{TattooShop.img_tattooshop}</td>
                <td>
                  <span className="m-1">
                    <Button variant="primary">
                      <Link
                        className="text-light text-decoration-none"
                        to={`/admin/tattooshops/edit/${TattooShop.tattooshop_id}`}
                      >
                        Edit
                      </Link>
                    </Button>
                  </span>
                  <span className="m-1">
                    <Button
                      variant="danger"
                      onClick={() => delTattooShop(TattooShop.tattooshop_id)}
                    >
                      Supprimer
                    </Button>
                  </span>
                  <span className="m-1">
                    <Button variant="success">
                      <Link
                        className="text-light text-decoration-none"
                        to={`/tattooshops/${TattooShop.tattooshop_id}`}
                      >
                        Voir
                      </Link>
                    </Button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TattooShops;
