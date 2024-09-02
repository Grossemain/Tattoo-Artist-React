import React from "react";

import Button from "react-bootstrap/Button";


import { useNavigate } from "react-router-dom";
import { accountService } from "../../_services/account.service";

const LogoutButton = () => {
  let navigate = useNavigate();

  // Gestion du bouton de déconnexion
  const logout = () => {
    accountService.logout();
    navigate("/");
  };

  return (
    <div>
                <Button variant="dark" onClick={logout}>
                  Deconnection
                </Button>
    </div>
  );
};

export default LogoutButton;
