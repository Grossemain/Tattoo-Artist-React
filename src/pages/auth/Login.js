import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Form , Button, Container, Col, Row} from "react-bootstrap";

import { accountService } from "../../_services";


const Login = () => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({});

  // Gestion de la modification des champs du formulaire
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault();
    accountService
      .login(credentials)
      .then((res) => {
        // Sauvegarde du token et envoi vers admin
        accountService.saveToken(res.data.data.access_token.token);
        navigate("/admin", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
        <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Connexion</h2>
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Entrer email"
          name="email"
          value={credentials.email}
          onChange={onChange}
        />
        <Form.Text className="text-muted">
          Ne partagez jamais votre email à quiconque.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de Passe</Form.Label>
        <Form.Control
          type="password"
          placeholder="Mot de Passe"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Connexion
      </Button>
      <Form.Group className="mb-3">
      <Form.Text className="text-muted text-center">
          Tu n'as pas encore de compte ? <a href="/register">Créer ton compte</a>.
        </Form.Text>
        </Form.Group>
    </Form>
    </Col>
    </Row>
    </Container>
  );
};

export default Login;
