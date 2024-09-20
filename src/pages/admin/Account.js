import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { accountService} from "../../_services/";
import PictureList from "../../components/public/Pictures/PictureList";
import FlashTattooList from "../../components/public/FlashTattoos/FlashTattooList";

const Account = () => {


  return (
    <div className="Account">
      Coucou le compte utilisateur
      <Container>
        <Row>
          <Col>
            {/* <PictureList /> */}
          </Col>
          <Col>
            {/* <FlashTattooList /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Account;
