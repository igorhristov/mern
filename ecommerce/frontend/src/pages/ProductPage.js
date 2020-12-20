import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
// import products from "../products";
import Rating from "../components/Rating";

const ProductPage = ({ match }) => {
  // const product = products.find((p) => p._id === match.params.id);
  const [product, setProduct] = useState({});
  const productId = match.params.id;

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <>
      <Link className="btn btn-outline-secondary my-3" to="/">
        Назад
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} мислења`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Цена: {product.price} ден</ListGroup.Item>
            <ListGroup.Item>Опис: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Цена:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Залиха:</Col>
                  <Col>{product.countInStock > 0 ? "Има" : "Нема Залиха"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Button
                    disabled={product.countInStock === 0}
                    className="btn-block"
                    type="button"
                  >
                    Додади во кошничка
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
