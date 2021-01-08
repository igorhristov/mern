import React from "react";
import { Row, Card, Button, Col } from "react-bootstrap";
import MetaData from "../layout/MetaData";

const HomePage = () => {
  return (
    <>
      <MetaData title={"Best Products"} />
      <h1>latest products</h1>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
