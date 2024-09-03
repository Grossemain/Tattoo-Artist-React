import React from 'react';
import {Container, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom"



const Footer = () => {
    return (
        <div className="Footer">
            <Container>
                <Row>
                    <Col>Copyright : Romain Maillet</Col>
                    <Col><a href="/mentions-legales">Mentions Légales</a></Col>
                    <Col><a href="/rgpd">Protection des données RGPD</a></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;