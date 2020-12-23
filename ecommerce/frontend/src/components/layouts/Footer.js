import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark mt-auto">
    <Container>
      <Row>
        <Col className="text-center py-3 text-secondary">
          &copy; Online Продавница {new Date().getFullYear()}
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
