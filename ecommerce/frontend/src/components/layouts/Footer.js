import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid={true}>
        <Row>
          <Col className="text-center py-3 bg-dark text-secondary">
            &copy; Online Продавница {' '}
            {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
